const dropzone = document.getElementById('dropzone');
        const avatarInput = document.getElementById('avatarInput');
        const previewImg = document.getElementById('previewImg');
        const uploadUI = document.getElementById('uploadUI');

        // 1. عند الضغط على المربع يفتح اختيار الصور
        dropzone.onclick = () => avatarInput.click();

        // 2. معالجة اختيار الصورة
        avatarInput.onchange = (e) => {
            const file = e.target.files[0];
            if (file) {
                if (file.size > 500000) {
                    alert("Image is too large! Max 500KB");
                    return;
                }

                const reader = new FileReader();
                reader.onload = (event) => {
                    const base64Image = event.target.result;
                    // عرض الصورة في المربع
                    previewImg.src = base64Image;
                    previewImg.classList.remove('hidden');
                    uploadUI.classList.add('hidden');
                    // حفظ الصورة في الذاكرة
                    localStorage.setItem('userAvatar', base64Image);
                };
                reader.readAsDataURL(file);
            }
        };

        // 3. إرسال الفورم
        document.getElementById('regForm').onsubmit = (e) => {
            e.preventDefault();
            localStorage.setItem('userData', JSON.stringify({
                name: document.getElementById('fullName').value,
                email: document.getElementById('email').value,
                github: document.getElementById('github').value
            }));
            window.location.href = "/page2/index.html";
        };