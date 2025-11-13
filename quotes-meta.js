// Big Love Experience - Quotes Metadata & Chunk Manager
// Lazy loading system for scalable quote database

const QuotesManager = {
    // Metadata
    totalQuotes: 1200,
    chunksCount: 3,
    quotesPerChunk: 400,
    
    // Cache system
    cache: new Map(),
    maxCachedChunks: 3,
    cacheOrder: [],
    
    // Statistics
    stats: {
        gombalan: 1200,
        puisi: 0,
        pantun: 0
    },
    
    /**
     * Get chunk number for a quote ID
     */
    getChunkNumber(quoteId) {
        return Math.ceil(quoteId / this.quotesPerChunk);
    },
    
    /**
     * Load a chunk file
     */
    async loadChunk(chunkNumber) {
        // Check cache first
        if (this.cache.has(chunkNumber)) {
            this.updateCacheOrder(chunkNumber);
            return this.cache.get(chunkNumber);
        }
        
        try {
            console.log(`Loading chunk ${chunkNumber}...`);
            
            // Create script tag to load chunk
            return new Promise((resolve, reject) => {
                const script = document.createElement('script');
                // Try relative path first, then absolute
                script.src = `./quotes/chunk-${chunkNumber}.js`;
                script.onload = () => {
                    // Get the chunk data from global scope
                    const chunkData = window[`chunk${chunkNumber}`];
                    if (chunkData && chunkData.length > 0) {
                        // Add to cache
                        this.cache.set(chunkNumber, chunkData);
                        this.cacheOrder.push(chunkNumber);
                        
                        // Cleanup old chunks if cache is full
                        if (this.cacheOrder.length > this.maxCachedChunks) {
                            const oldestChunk = this.cacheOrder.shift();
                            this.cache.delete(oldestChunk);
                        }
                        
                        console.log(`✅ Chunk ${chunkNumber} loaded: ${chunkData.length} quotes`);
                        resolve(chunkData);
                    } else {
                        console.error(`❌ Chunk ${chunkNumber} data not found in window object`);
                        reject(new Error(`Chunk ${chunkNumber} is empty`));
                    }
                };
                script.onerror = (e) => {
                    console.error(`❌ Failed to load chunk ${chunkNumber} from ${script.src}`);
                    reject(new Error(`Failed to load chunk ${chunkNumber}`));
                };
                document.head.appendChild(script);
            });
        } catch (error) {
            console.error(`Failed to load chunk ${chunkNumber}:`, error);
            throw error;
        }
    },
    
    /**
     * Update cache order (LRU)
     */
    updateCacheOrder(chunkNumber) {
        const index = this.cacheOrder.indexOf(chunkNumber);
        if (index > -1) {
            this.cacheOrder.splice(index, 1);
            this.cacheOrder.push(chunkNumber);
        }
    },
    
    /**
     * Get random quote from any chunk
     */
    async getRandomQuote(type = null) {
        let randomId;
        
        if (type) {
            // Filter by type (approximate distribution)
            const typeRanges = {
                'gombalan': { start: 1, end: 1200 },
                'puisi': { start: 1201, end: 2200 },
                'pantun': { start: 2201, end: 3000 }
            };
            
            const range = typeRanges[type] || { start: 1, end: this.totalQuotes };
            randomId = Math.floor(Math.random() * (range.end - range.start + 1)) + range.start;
        } else {
            randomId = Math.floor(Math.random() * this.totalQuotes) + 1;
        }
        
        return await this.getQuoteById(randomId);
    },
    
    /**
     * Get specific quote by ID
     */
    async getQuoteById(quoteId) {
        const chunkNumber = this.getChunkNumber(quoteId);
        const quotes = await this.loadChunk(chunkNumber);
        
        if (quotes && quotes.length > 0) {
            const indexInChunk = (quoteId - 1) % this.quotesPerChunk;
            return quotes[indexInChunk] || quotes[0];
        }
        
        return null;
    },
    
    /**
     * Preload next chunk for smooth experience
     */
    async preloadNextChunk(currentQuoteId) {
        const currentChunk = this.getChunkNumber(currentQuoteId);
        const nextChunk = (currentChunk % this.chunksCount) + 1;
        
        // Load in background without waiting
        this.loadChunk(nextChunk).catch(() => {});
    },
    
    /**
     * Get statistics
     */
    getStats() {
        return {
            total: this.totalQuotes,
            ...this.stats,
            cachedChunks: this.cache.size,
            loadedQuotes: Array.from(this.cache.values()).reduce((sum, chunk) => sum + chunk.length, 0)
        };
    },
    
    /**
     * Clear cache (for memory optimization)
     */
    clearCache() {
        this.cache.clear();
        this.cacheOrder = [];
    }
};

// Make available globally
window.QuotesManager = QuotesManager;
