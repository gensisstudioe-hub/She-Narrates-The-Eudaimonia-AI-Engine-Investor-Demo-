// frontend-demo/demo_logic.js
// هذا الملف يحاكي عمل دوال Eudaimonia::MindStudio::Neuroaesthetics
// يُستخدم في index.html لغرض العرض فقط.

const EudaimoniaGemSimulator = {
    
    // محاكاة اختيار اللون (مُعدلة لدعم الوضوح)
    selectColor: function(button) {
        document.querySelectorAll('.color-selector button').forEach(btn => {
            btn.style.border = '2px solid transparent';
        });
        // استخدام لون مميز للإشارة إلى التحديد
        button.style.border = '4px solid #ff6f61'; 
    },
    
    // محاكاة عملية معالجة القصة وتحديد درجة الاتساق (الـ KPI)
    processCognitiveTest: function(aestheticChoice, story) {
        let score = 0;
        let message = '';
        
        // تحديد النجاح بناءً على اختيار المستخدم
        if (aestheticChoice === 'high_consistency') {
            // يحاكي نتيجة عالية (مكافأة مزدوجة)
            score = Math.floor(Math.random() * (95 - 85 + 1)) + 85; 
            message = "تم منح **المكافأة المزدوجة:** خلفية مخصصة وترقية وصول لـ Learning Lab. تم إثبات الوضوح الهيكلي!";
        } else if (aestheticChoice === 'medium_consistency') {
            score = Math.floor(Math.random() * (75 - 55 + 1)) + 55;
            message = "تم منح مكافأة أساسية (خلفية مخصصة).";
        } else {
            // يحاكي نتيجة منخفضة
            score = Math.floor(Math.random() * (45 - 20 + 1)) + 20;
            message = "تم رصد تضارب. يرجى إعادة محاولة التصميم لتحقيق الوضوح (استخدام لون أكثر هدوءًا).";
        }

        return { score: score, message: message };
    }
};