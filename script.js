(function() { emailjs.init("rI-X_67czvTjPDZjh"); })();

// --- محرك العداد التنازلي ---
function startBEMCountdown() {
    const examDate = new Date("June 1, 2026 08:00:00").getTime();
    setInterval(() => {
        const now = new Date().getTime();
        const difference = examDate - now;
        if (difference > 0) {
            document.getElementById("days").innerText = Math.floor(difference / (1000 * 60 * 60 * 24));
            document.getElementById("hours").innerText = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            document.getElementById("minutes").innerText = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            document.getElementById("seconds").innerText = Math.floor((difference % (1000 * 60)) / 1000);
        }
    }, 1000);
}
startBEMCountdown();

// --- التحكم في النافذة المنبثقة ---
const modal = document.getElementById('excel-modal');
document.getElementById('open-excel-portal').onclick = () => { modal.style.display = 'flex'; };
document.getElementById('plus-btn-access').onclick = () => { modal.style.display = 'flex'; };

function closeModal() { modal.style.display = 'none'; }

// التحقق من كلمة المرور مع حركة اهتزاز عند الخطأ
function verifyPass() {
    const passField = document.getElementById('pass-field');
    if(passField.value === "12345678890") {
        document.getElementById('auth-step').style.display = 'none';
        document.getElementById('download-step').style.display = 'block';
    } else {
        passField.animate([
            { transform: 'translateX(0)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(0)' }
        ], { duration: 200, iterations: 2 });
        alert("كلمة المرور خاطئة");
    }
}

function doDownload() {
    const selected = document.querySelector('input[name="teacher"]:checked');
    if(selected) {
        window.location.href = selected.value;
    } else {
        alert("الرجاء اختيار أستاذ من القائمة");
    }
}

// نموذج الاتصال
document.getElementById("contact-form").onsubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById("contact-btn");
    const originalText = btn.innerText;
    btn.innerText = "جارٍ الإرسال...";
    btn.disabled = true;

    emailjs.sendForm("service_i0kgqwm", "template_9ylx4wo", this)
        .then(() => {
            alert("✅ تم الإرسال بنجاح!");
            this.reset();
        })
        .catch(() => alert("❌ فشل الإرسال."))
        .finally(() => {
            btn.innerText = originalText;
            btn.disabled = false;
        });
};
