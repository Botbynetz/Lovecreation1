const allQuotes = [
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Kamu seperti bulan purnama, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like the full moon, bringing happiness."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Aku tidak butuh matahari, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need the sun, because being with you is perfect."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, lighting up every corner of my life."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Kamu seperti bintang di langit, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a star in the sky, always making my day better."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I think about you, the world feels perfect."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu seperti matahari pagi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the morning sun, soothing my soul."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, always making my day better."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Aku tidak butuh dongeng, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because being with you is perfect."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Kamu seperti embun pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like morning dew, lighting up every corner of my life."
    },
    {
        "id": "Kamu seperti angin sepoi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a breeze, lighting up every corner of my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku melihatmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I see you, the world feels perfect."
    },
    {
        "id": "Setiap kali aku melihatmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I see you, I can't stop smiling."
    },
    {
        "id": "Aku tidak butuh dongeng, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because your smile is enough."
    },
    {
        "id": "Setiap kali aku mendengar namamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I hear your name, I can't stop smiling."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu seperti angin sepoi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a breeze, always making my day better."
    },
    {
        "id": "Kamu seperti embun pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like morning dew, lighting up every corner of my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Aku tidak butuh bintang, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need stars, because your eyes already light up my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I think about you, I can't stop smiling."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu seperti bintang di langit, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a star in the sky, bringing happiness."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Setiap kali aku bersamamu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart beats faster."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan dongeng, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the fairy tale, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Aku tidak butuh GPS, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a GPS, because being with you is perfect."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I think about you, I can't stop smiling."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Aku tidak butuh kompas, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a compass, because your smile is enough."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, always making my day better."
    },
    {
        "id": "Setiap kali aku mendengar namamu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I hear your name, the world feels perfect."
    },
    {
        "id": "Aku tidak butuh bulan, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need the moon, because your eyes already light up my life."
    },
    {
        "id": "Kamu seperti bintang di langit, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a star in the sky, always making my day better."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Aku tidak butuh kompas, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a compass, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Setiap kali aku bersamamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart blooms."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu seperti bintang di langit, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a star in the sky, bringing happiness."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a miracle, because being with you is perfect."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Aku tidak butuh surga, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need heaven, because being with you is perfect."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh kompas, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a compass, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku mendengar namamu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I hear your name, the world feels perfect."
    },
    {
        "id": "Kamu seperti matahari pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like the morning sun, illuminating every corner of my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku melihatmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I see you, I can't stop smiling."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu seperti angin sepoi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a breeze, cooling my soul."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Aku tidak butuh GPS, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a GPS, because your eyes already light up my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh dongeng, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because your smile is enough."
    },
    {
        "id": "Kamu seperti matahari pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the morning sun, always making my day better."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Setiap kali aku kehilangan arah, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart blooms."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, soothing my soul."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku mendengar namamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart blooms."
    },
    {
        "id": "Kamu seperti matahari pagi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like the morning sun, bringing happiness."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Setiap kali aku bersamamu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Whenever I'm with you, the world feels perfect."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your eyes already light up my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku melihatmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I see you, the world feels perfect."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu seperti embun pagi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like morning dew, bringing happiness."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your eyes already light up my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku menutup mata, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I close my eyes, the world feels perfect."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti angin sepoi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a breeze, cooling my soul."
    },
    {
        "id": "Aku tidak butuh surga, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need heaven, because your eyes already light up my life."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu seperti bulan purnama, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the full moon, always making my day better."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku melihatmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I see you, I can't stop smiling."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart beats faster."
    },
    {
        "id": "Aku tidak butuh bulan, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need the moon, because being with you is perfect."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, lighting up every corner of my life."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Setiap kali aku melihatmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I see you, I can't stop smiling."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku tidak butuh bintang, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need stars, because you are everything."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Aku tidak butuh dongeng, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because your smile is enough."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku tidak butuh bintang, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need stars, because being with you is perfect."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, bringing happiness."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, always making my day better."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your smile is enough."
    },
    {
        "id": "Kamu seperti bintang di langit, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a star in the sky, lighting up every corner of my life."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Setiap kali aku melihatmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I see you, I can't stop smiling."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Aku tidak butuh bintang, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need stars, because your eyes already light up my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Kamu seperti bintang di langit, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a star in the sky, soothing my soul."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, soothing my soul."
    },
    {
        "id": "Kamu seperti embun pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like morning dew, always making my day better."
    },
    {
        "id": "Aku tidak butuh matahari, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need the sun, because you are everything."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, lighting up every corner of my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, always making my day better."
    },
    {
        "id": "Aku tidak butuh bintang, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need stars, because you are everything."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Aku tidak butuh kompas, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a compass, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku bersamamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I'm with you, I can't stop smiling."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Aku tidak butuh GPS, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a GPS, because your smile is enough."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Aku tidak butuh bulan, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need the moon, because you are everything."
    },
    {
        "id": "Aku tidak butuh bintang, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need stars, because your eyes already light up my life."
    },
    {
        "id": "Setiap kali aku menutup mata, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I close my eyes, the world feels perfect."
    },
    {
        "id": "Setiap kali aku melihatmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I see you, the world feels perfect."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Setiap kali aku kehilangan arah, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I lose my way, the world feels perfect."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Aku tidak butuh peta, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a map, because you are everything."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh dongeng, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need fairy tales, because you are everything."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Setiap kali aku menutup mata, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I close my eyes, the world feels perfect."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a miracle, because your smile is enough."
    },
    {
        "id": "Setiap kali aku kehilangan arah, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I lose my way, I can't stop smiling."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Setiap kali aku menutup mata, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I close my eyes, my heart beats faster."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Kamu seperti bulan purnama, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like the full moon, bringing happiness."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, lighting up every corner of my life."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Aku bisa kehilangan surga, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose heaven, but not you."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku melihatmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I see you, I can't stop smiling."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh bulan, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need the moon, because you are everything."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh bintang, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need stars, because your eyes already light up my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku menutup mata, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I close my eyes, my heart beats faster."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I think about you, the world feels perfect."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Setiap kali aku kehilangan arah, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart blooms."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Aku tidak butuh matahari, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need the sun, because you are everything."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart beats faster."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Aku bisa kehilangan dongeng, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the fairy tale, but not you."
    },
    {
        "id": "Aku tidak butuh bintang, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need stars, because your smile is enough."
    },
    {
        "id": "Kamu seperti angin sepoi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a breeze, bringing happiness."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku kehilangan arah, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I lose my way, I can't stop smiling."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, soothing my soul."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a miracle, because your smile is enough."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh matahari, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need the sun, because your eyes already light up my life."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, soothing my soul."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku menutup mata, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I close my eyes, my heart blooms."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, lighting up every corner of my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku kehilangan arah, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I lose my way, I can't stop smiling."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku tidak butuh dongeng, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because your eyes already light up my life."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Kamu seperti embun pagi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like morning dew, bringing happiness."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku tidak butuh kompas, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a compass, because you are everything."
    },
    {
        "id": "Setiap kali aku mendengar namamu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I hear your name, the world feels perfect."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Aku tidak butuh kompas, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a compass, because with you it's perfect."
    },
    {
        "id": "Aku tidak butuh peta, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a map, because you are everything."
    },
    {
        "id": "Kamu seperti bintang di langit, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a star in the sky, always making my day better."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh bintang, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need stars, because being with you is perfect."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Setiap kali aku bersamamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart blooms."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Setiap kali aku bersamamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart blooms."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Setiap kali aku mendengar namamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I hear your name, I can't stop smiling."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Setiap kali aku menutup mata, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I close my eyes, my heart blooms."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Aku bisa kehilangan dongeng, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the fairy tale, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Setiap kali aku mendengar namamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart blooms."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, lighting up every corner of my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh surga, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need heaven, because being with you is perfect."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Aku bisa kehilangan dongeng, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the fairy tale, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, soothing my soul."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Aku tidak butuh GPS, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a GPS, because you are everything."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Setiap kali aku menutup mata, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I close my eyes, the world feels perfect."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu seperti bintang di langit, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a star in the sky, lighting up every corner of my life."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh bintang, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need stars, because your smile is enough."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh GPS, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a GPS, because your smile is enough."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Aku tidak butuh kompas, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a compass, because you are everything."
    },
    {
        "id": "Aku tidak butuh bulan, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need the moon, because your eyes already light up my life."
    },
    {
        "id": "Kamu seperti embun pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like morning dew, lighting up every corner of my life."
    },
    {
        "id": "Setiap kali aku mendengar namamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart blooms."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Aku bisa kehilangan dongeng, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the fairy tale, but not you."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Setiap kali aku melihatmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I see you, my heart beats faster."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart beats faster."
    },
    {
        "id": "Kamu seperti bulan purnama, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the full moon, always making my day better."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu seperti bintang di langit, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a star in the sky, soothing my soul."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu seperti angin sepoi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a breeze, always making my day better."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku menutup mata, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I close my eyes, my heart blooms."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh surga, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need heaven, because your eyes already light up my life."
    },
    {
        "id": "Setiap kali aku menutup mata, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I close my eyes, I can't stop smiling."
    },
    {
        "id": "Setiap kali aku kehilangan arah, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart blooms."
    },
    {
        "id": "Setiap kali aku mendengar namamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I hear your name, I can't stop smiling."
    },
    {
        "id": "Kamu seperti matahari pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the morning sun, always making my day better."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Kamu seperti matahari pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the morning sun, always making my day better."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh GPS, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a GPS, because you are everything."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Aku bisa kehilangan surga, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose heaven, but not you."
    },
    {
        "id": "Aku tidak butuh matahari, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need the sun, because your smile is enough."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I think about you, the world feels perfect."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Kamu seperti embun pagi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like morning dew, bringing happiness."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Setiap kali aku melihatmu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I see you, I can't stop smiling."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, always making my day better."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, lighting up every corner of my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh peta, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a map, because your eyes already light up my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti bintang di langit, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a star in the sky, always making my day better."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Kamu seperti embun pagi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like morning dew, cooling my soul."
    },
    {
        "id": "Aku tidak butuh surga, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need heaven, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan surga, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose heaven, but not you."
    },
    {
        "id": "Aku tidak butuh dongeng, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because being with you is perfect."
    },
    {
        "id": "Aku tidak butuh kompas, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a compass, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak butuh surga, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need heaven, because being with you is perfect."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh GPS, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a GPS, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need beautiful dreams, because being with you is perfect."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti bintang di langit, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a star in the sky, soothing my soul."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku mendengar namamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I hear your name, I can't stop smiling."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku tidak butuh bintang, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need stars, because your smile is enough."
    },
    {
        "id": "Kamu seperti bintang di langit, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a star in the sky, always making my day better."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Aku tidak butuh bintang, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need stars, because you are everything."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh matahari, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need the sun, because your smile is enough."
    },
    {
        "id": "Kamu seperti bulan purnama, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the full moon, always making my day better."
    },
    {
        "id": "Aku tidak butuh GPS, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a GPS, because your eyes already light up my life."
    },
    {
        "id": "Setiap kali aku kehilangan arah, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I lose my way, the world feels perfect."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Setiap kali aku mendengar namamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I hear your name, I can't stop smiling."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Setiap kali aku menutup mata, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I close my eyes, my heart blooms."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Kamu seperti embun pagi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like morning dew, cooling my soul."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh bintang, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need stars, because your smile is enough."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Kamu seperti bintang di langit, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a star in the sky, bringing happiness."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Kamu seperti bulan purnama, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the full moon, always making my day better."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku menutup mata, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I close my eyes, I can't stop smiling."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku melihatmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I see you, my heart blooms."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu seperti angin sepoi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a breeze, always making my day better."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Setiap kali aku bersamamu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart beats faster."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Setiap kali aku bersamamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart blooms."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your eyes already light up my life."
    },
    {
        "id": "Kamu seperti embun pagi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like morning dew, cooling my soul."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, always making my day better."
    },
    {
        "id": "Aku bisa kehilangan surga, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose heaven, but not you."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Aku tidak butuh dongeng, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because your eyes already light up my life."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Kamu seperti bulan purnama, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like the full moon, bringing happiness."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Setiap kali aku melihatmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I see you, my heart blooms."
    },
    {
        "id": "Aku tidak butuh matahari, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need the sun, because you are everything."
    },
    {
        "id": "Aku tidak butuh kompas, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a compass, because your smile is enough."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Setiap kali aku menutup mata, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I close my eyes, I can't stop smiling."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a miracle, because your smile is enough."
    },
    {
        "id": "Aku tidak butuh peta, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a map, because your smile is enough."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu seperti embun pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like morning dew, lighting up every corner of my life."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a miracle, because being with you is perfect."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, bringing happiness."
    },
    {
        "id": "Aku tidak butuh dongeng, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need fairy tales, because you are everything."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need beautiful dreams, because being with you is perfect."
    },
    {
        "id": "Aku tidak butuh dongeng, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because your smile is enough."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Aku tidak butuh matahari, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need the sun, because your eyes already light up my life."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Aku tidak butuh matahari, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need the sun, because your smile is enough."
    },
    {
        "id": "Setiap kali aku mendengar namamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart blooms."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh bulan, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need the moon, because your smile is enough."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku kehilangan arah, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I lose my way, the world feels perfect."
    },
    {
        "id": "Aku tidak butuh bintang, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need stars, because your smile is enough."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, always making my day better."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku tidak butuh GPS, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a GPS, because you are everything."
    },
    {
        "id": "Aku bisa kehilangan surga, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose heaven, but not you."
    },
    {
        "id": "Kamu seperti bintang di langit, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a star in the sky, always making my day better."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Aku bisa kehilangan surga, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose heaven, but not you."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart beats faster."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan dongeng, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the fairy tale, but not you."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku kehilangan arah, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I lose my way, I can't stop smiling."
    },
    {
        "id": "Aku tidak butuh kompas, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a compass, because your smile is enough."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your smile is enough."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Aku tidak butuh bintang, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need stars, because your smile is enough."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a miracle, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak butuh matahari, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need the sun, because your smile is enough."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your smile is enough."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your smile is enough."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh GPS, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a GPS, because being with you is perfect."
    },
    {
        "id": "Aku tidak butuh surga, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need heaven, because you are everything."
    },
    {
        "id": "Kamu seperti matahari pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like the morning sun, illuminating every corner of my life."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Setiap kali aku mendengar namamu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I hear your name, the world feels perfect."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Aku tidak butuh kompas, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a compass, because with you it's perfect."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh surga, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need heaven, because your smile is enough."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Kamu seperti bintang di langit, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a star in the sky, soothing my soul."
    },
    {
        "id": "Kamu seperti matahari pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like the morning sun, illuminating every corner of my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart beats faster."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, lighting up every corner of my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku kehilangan arah, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I lose my way, the world feels perfect."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu seperti embun pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like morning dew, lighting up every corner of my life."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I think about you, the world feels perfect."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti angin sepoi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a breeze, cooling my soul."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku bersamamu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart beats faster."
    },
    {
        "id": "Aku tidak butuh bulan, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need the moon, because being with you is perfect."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti matahari pagi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like the morning sun, bringing happiness."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need beautiful dreams, because being with you is perfect."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need beautiful dreams, because being with you is perfect."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Setiap kali aku menutup mata, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I close my eyes, my heart blooms."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, always making my day better."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Aku bisa kehilangan GPS, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the GPS, but not you."
    },
    {
        "id": "Setiap kali aku melihatmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I see you, my heart blooms."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Aku tidak butuh surga, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need heaven, because you are everything."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, bringing happiness."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku mendengar namamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart blooms."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Kamu seperti angin sepoi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a breeze, cooling my soul."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a miracle, because being with you is perfect."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Aku bisa kehilangan peta, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the map, but not you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku mendengar namamu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart beats faster."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti bintang di langit, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a star in the sky, soothing my soul."
    },
    {
        "id": "Setiap kali aku melihatmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I see you, my heart beats faster."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu seperti angin sepoi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a breeze, bringing happiness."
    },
    {
        "id": "Kamu seperti bulan purnama, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like the full moon, bringing happiness."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Aku tidak butuh bulan, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need the moon, because being with you is perfect."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu seperti matahari pagi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like the morning sun, bringing happiness."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a miracle, because being with you is perfect."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I think about you, the world feels perfect."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Aku tidak butuh GPS, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a GPS, because you are everything."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, soothing my soul."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Setiap kali aku menutup mata, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I close my eyes, the world feels perfect."
    },
    {
        "id": "Setiap kali aku menutup mata, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I close my eyes, the world feels perfect."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need beautiful dreams, because being with you is perfect."
    },
    {
        "id": "Kamu seperti angin sepoi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a breeze, always making my day better."
    },
    {
        "id": "Setiap kali aku bersamamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I'm with you, I can't stop smiling."
    },
    {
        "id": "Kamu seperti matahari pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like the morning sun, illuminating every corner of my life."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Kamu seperti angin sepoi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a breeze, bringing happiness."
    },
    {
        "id": "Kamu seperti angin sepoi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a breeze, bringing happiness."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh bintang, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need stars, because your smile is enough."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, always making my day better."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku mendengar namamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart blooms."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Aku tidak butuh kompas, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a compass, because your eyes already light up my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti embun pagi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like morning dew, bringing happiness."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu seperti angin sepoi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a breeze, always making my day better."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Kamu seperti embun pagi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like morning dew, cooling my soul."
    },
    {
        "id": "Setiap kali aku bersamamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I'm with you, I can't stop smiling."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your smile is enough."
    },
    {
        "id": "Aku bisa kehilangan mimpi indah, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose sweet dreams, but not you."
    },
    {
        "id": "Aku tidak butuh bintang, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need stars, because your smile is enough."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need beautiful dreams, because being with you is perfect."
    },
    {
        "id": "Kamu seperti bintang di langit, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a star in the sky, lighting up every corner of my life."
    },
    {
        "id": "Aku bisa kehilangan surga, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose heaven, but not you."
    },
    {
        "id": "Setiap kali aku melihatmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I see you, my heart blooms."
    },
    {
        "id": "Aku tidak butuh GPS, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a GPS, because you are everything."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh peta, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a map, because your smile is enough."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, always making my day better."
    },
    {
        "id": "Setiap kali aku menutup mata, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I close my eyes, my heart blooms."
    },
    {
        "id": "Setiap kali aku mendengar namamu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart beats faster."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku menutup mata, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I close my eyes, the world feels perfect."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku melihatmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I see you, the world feels perfect."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku melihatmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I see you, my heart beats faster."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh bulan, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need the moon, because you are everything."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh bintang, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need stars, because your eyes already light up my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Setiap kali aku bersamamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart blooms."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your smile is enough."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, always making my day better."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, always making my day better."
    },
    {
        "id": "Kamu seperti matahari pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like the morning sun, illuminating every corner of my life."
    },
    {
        "id": "Aku tidak butuh matahari, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need the sun, because your eyes already light up my life."
    },
    {
        "id": "Aku bisa kehilangan dongeng, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the fairy tale, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart beats faster."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh kompas, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a compass, because with you it's perfect."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh GPS, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a GPS, because being with you is perfect."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh matahari, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need the sun, because you are everything."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart beats faster."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu seperti angin sepoi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a breeze, bringing happiness."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Aku tidak butuh bulan, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need the moon, because your eyes already light up my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu seperti bulan purnama, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like the full moon, lighting up every corner of my life."
    },
    {
        "id": "Aku tidak butuh dongeng, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because being with you is perfect."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Setiap kali aku melihatmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I see you, the world feels perfect."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Setiap kali aku mendengar namamu, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I hear your name, I can't stop smiling."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh kompas, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a compass, because your smile is enough."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Aku tidak butuh bulan, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need the moon, because you are everything."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, soothing my soul."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Kamu seperti angin sepoi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like a breeze, bringing happiness."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu seperti embun pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like morning dew, always making my day better."
    },
    {
        "id": "Aku tidak butuh bulan, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need the moon, because your eyes already light up my life."
    },
    {
        "id": "Setiap kali aku melihatmu, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I see you, my heart beats faster."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need a miracle, because you are everything."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, soothing my soul."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a miracle, because your eyes already light up my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Setiap kali aku bersamamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart blooms."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Seandainya aku bisa bersamamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could be with you, I would take care of you forever."
    },
    {
        "id": "Aku tidak butuh dongeng, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need a fairy tale, because your smile is enough."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need beautiful dreams, because being with you is perfect."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Aku tidak tahu apa yang lebih menakjubkan, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more amazing, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I think about you, the world feels perfect."
    },
    {
        "id": "Setiap kali aku bersamamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart blooms."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Aku tidak butuh kompas, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a compass, because with you it's perfect."
    },
    {
        "id": "Kamu seperti bulan purnama, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like the full moon, soothing my soul."
    },
    {
        "id": "Kamu seperti matahari pagi, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like the morning sun, bringing happiness."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh mimpi indah, karena senyummu sudah cukup.",
        "type": "gombalan",
        "en": "I don't need sweet dreams, because your smile is enough."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Aku tidak tahu apa yang lebih indah, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more beautiful, your smile or your eyes."
    },
    {
        "id": "Kamu adalah cahaya dalam gelap dalam hidupku.",
        "type": "gombalan",
        "en": "You are the light in the darkness of my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih sempurna, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more perfect, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Setiap kali aku kehilangan arah, jantungku berdetak lebih cepat.",
        "type": "gombalan",
        "en": "Every time I lose direction, my heart beats faster."
    },
    {
        "id": "Aku bisa kehilangan keajaiban, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the magic, but not you."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a miracle, because your eyes already light up my life."
    },
    {
        "id": "Setiap kali aku menutup mata, aku tidak bisa berhenti tersenyum.",
        "type": "gombalan",
        "en": "Every time I close my eyes, I can't stop smiling."
    },
    {
        "id": "Kamu seperti kopi di pagi hari, membawa kebahagiaan.",
        "type": "gombalan",
        "en": "You are like coffee in the morning, bringing happiness."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Kamu seperti matahari pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like the morning sun, illuminating every corner of my life."
    },
    {
        "id": "Aku tidak butuh kompas, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a compass, because with you it's perfect."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Kamu seperti embun pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like morning dew, always making my day better."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Kamu seperti angin sepoi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a breeze, always making my day better."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Aku tidak tahu apa yang lebih cantik, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's prettier, your smile or your eyes."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Setiap kali aku bersamamu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Whenever I'm with you, the world feels perfect."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Kamu adalah puzzle terakhir dalam hidupku.",
        "type": "gombalan",
        "en": "You are the final puzzle in my life."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need a miracle, because your eyes already light up my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Setiap kali aku melihatmu, dunia terasa sempurna.",
        "type": "gombalan",
        "en": "Every time I see you, the world feels perfect."
    },
    {
        "id": "Seandainya aku bisa mendengar namamu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could hear your name, I would guard you forever."
    },
    {
        "id": "Setiap kali aku melihatmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I see you, my heart blooms."
    },
    {
        "id": "Seandainya aku bisa kehilangan arah, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could lose my way, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Kamu seperti angin sepoi, menyejukkan jiwaku.",
        "type": "gombalan",
        "en": "You are like a breeze, cooling my soul."
    },
    {
        "id": "Kamu adalah rumah tempat pulang dalam hidupku.",
        "type": "gombalan",
        "en": "You are the home in my life."
    },
    {
        "id": "Kamu seperti angin sepoi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like a breeze, lighting up every corner of my life."
    },
    {
        "id": "Aku tidak tahu apa yang lebih memukau, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's more stunning, your smile or your eyes."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak butuh dongeng, karena kamu adalah segalanya.",
        "type": "gombalan",
        "en": "I don't need fairy tales, because you are everything."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    },
    {
        "id": "Kamu membuat dunia terasa indah.",
        "type": "gombalan",
        "en": "You make the world feel beautiful."
    },
    {
        "id": "Seandainya aku bisa berpikir tentangmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could think about you, I would take care of you forever."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Setiap kali aku bersamamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I'm with you, my heart blooms."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Kamu adalah alasan mengapa aku bersamamu.",
        "type": "gombalan",
        "en": "You are the reason why I am with you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu adalah alasan mengapa aku melihatmu.",
        "type": "gombalan",
        "en": "You are the reason why I look at you."
    },
    {
        "id": "Seandainya aku bisa melihatmu, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could see you, I would take care of you forever."
    },
    {
        "id": "Aku bisa kehilangan kompas, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose my compass, but not you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku mendengar namamu.",
        "type": "gombalan",
        "en": "You are the reason why I hear your name."
    },
    {
        "id": "Kamu adalah impian yang jadi nyata dalam hidupku.",
        "type": "gombalan",
        "en": "You are a dream come true in my life."
    },
    {
        "id": "Kamu seperti matahari pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the morning sun, always making my day better."
    },
    {
        "id": "Aku bisa kehilangan bulan, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the moon, but not you."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Setiap kali aku mendengar namamu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I hear your name, my heart blooms."
    },
    {
        "id": "Aku tidak butuh matahari, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need the sun, because being with you is perfect."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Kamu seperti embun pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like morning dew, always making my day better."
    },
    {
        "id": "Jika bersamamu, maka bahagia.",
        "type": "gombalan",
        "en": "If it's with you, then it's happy."
    },
    {
        "id": "Aku tidak tahu apa yang lebih manis, senyummu atau matamu.",
        "type": "gombalan",
        "en": "I don't know what's cuter, your smile or your eyes."
    },
    {
        "id": "Kamu adalah alasan mengapa aku kehilangan arah.",
        "type": "gombalan",
        "en": "You are the reason why I lost my way."
    },
    {
        "id": "Aku bisa kehilangan bintang, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose stars, but not you."
    },
    {
        "id": "Kamu seperti matahari pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the morning sun, always making my day better."
    },
    {
        "id": "Seandainya aku bisa menutup mata, aku akan menjagamu selamanya.",
        "type": "gombalan",
        "en": "If I could close my eyes, I would watch over you forever."
    },
    {
        "id": "Kamu seperti pelangi setelah hujan, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like a rainbow after the rain, always making my day better."
    },
    {
        "id": "Kamu seperti matahari pagi, selalu membuat hariku lebih baik.",
        "type": "gombalan",
        "en": "You are like the morning sun, always making my day better."
    },
    {
        "id": "Aku tidak butuh keajaiban, karena bersamamu sudah sempurna.",
        "type": "gombalan",
        "en": "I don't need a miracle, because being with you is perfect."
    },
    {
        "id": "Kamu seperti matahari pagi, menerangi setiap sudut hidupku.",
        "type": "gombalan",
        "en": "You are like the morning sun, illuminating every corner of my life."
    },
    {
        "id": "Aku tidak butuh bulan, karena matamu sudah menerangi hidupku.",
        "type": "gombalan",
        "en": "I don't need the moon, because your eyes already light up my life."
    },
    {
        "id": "Kamu adalah alasan mengapa aku berpikir tentangmu.",
        "type": "gombalan",
        "en": "You are the reason why I think about you."
    },
    {
        "id": "Kamu adalah alasan mengapa aku menutup mata.",
        "type": "gombalan",
        "en": "You are the reason why I close my eyes."
    },
    {
        "id": "Aku bisa kehilangan matahari, tapi tidak kamu.",
        "type": "gombalan",
        "en": "I can lose the sun, but not you."
    },
    {
        "id": "Setiap kali aku berpikir tentangmu, hatiku berbunga-bunga.",
        "type": "gombalan",
        "en": "Every time I think about you, my heart blooms."
    },
    {
        "id": "Kamu adalah jawaban dari doa dalam hidupku.",
        "type": "gombalan",
        "en": "You are the answer to prayers in my life."
    }
];
