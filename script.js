(function() { emailjs.init("rI-X_67czvTjPDZjh"); })();

const modal = document.getElementById('excel-modal');
document.getElementById('open-excel-portal').onclick = () => { modal.style.display = 'flex'; };
document.getElementById('plus-btn-access').onclick = () => { modal.style.display = 'flex'; };

function closeModal() { modal.style.display = 'none'; }

function verifyPass() {
    const pass = document.getElementById('pass-field').value;
    if(pass === "12345678890") {
        document.getElementById('auth-step').style.display = 'none';
        document.getElementById('download-step').style.display = 'block';
    } else { alert("كلمة المرور خاطئة"); }
}

function doDownload() {
    const selected = document.querySelector('input[name="teacher"]:checked');
    if(selected) {
        window.location.href = selected.value;
    } else {
        alert("الرجاء اختيار أستاذ من القائمة");
    }
}

// برمجة نموذج الاتصال
document.getElementById("contact-form").onsubmit = function(e) {
    e.preventDefault();
    const btn = document.getElementById("contact-btn");
    btn.innerText = "جارٍ الإرسال...";
    emailjs.sendForm("service_i0kgqwm", "template_9ylx4wo", this)
        .then(() => {
            alert("✅ تم الإرسال بنجاح!");
            this.reset();
        })
        .catch(() => alert("❌ فشل الإرسال."))
        .finally(() => btn.innerText = "إرسال");
};
