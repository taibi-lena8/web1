(function() { emailjs.init("rI-X_67czvTjPDZjh"); })();

function handleForm(formId, btnId, statusId) {
    const form = document.getElementById(formId);
    if (!form) return;
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        const btn = document.getElementById(btnId);
        const status = document.getElementById(statusId);
        btn.disabled = true; btn.innerText = "جارٍ الإرسال...";
        emailjs.sendForm("service_i0kgqwm", "template_9ylx4wo", this)
            .then(() => { 
                status.innerText = "✅ تم الإرسال!"; 
                status.style.color = "#27ae60"; 
                form.reset(); 
            })
            .catch(() => { 
                status.innerText = "❌ فشل الإرسال."; 
                status.style.color = "#c0392b"; 
            })
            .finally(() => { 
                btn.disabled = false; btn.innerText = "إرسال"; 
            });
    });
}
handleForm("contact-form", "contact-btn", "contact-status");

const modal = document.getElementById('excel-modal');
document.getElementById('open-excel-portal').onclick = () => { modal.style.display = 'flex'; };
document.getElementById('plus-btn-access').onclick = () => { modal.style.display = 'flex'; };

function closeModal() { modal.style.display = 'none'; }

function verifyPass() {
    if(document.getElementById('pass-field').value === "12345678890") {
        document.getElementById('auth-step').style.display = 'none';
        document.getElementById('download-step').style.display = 'block';
    } else { alert("كلمة المرور خاطئة"); }
}

function doDownload() {
    const selected = document.querySelector('input[name="teacher"]:checked');
    if(selected) {
        window.location.href = selected.value;
    } else {
        alert("الرجاء اختيار أستاذ");
    }
}
