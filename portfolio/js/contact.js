const form=document.querySelector('#contactForm'),status=document.querySelector('#formStatus');
form?.addEventListener('submit',async e=>{
 e.preventDefault(); status.textContent='';
 if(!form.checkValidity()){form.reportValidity();status.textContent='Please complete all required fields.';return}
 status.textContent='Sending…';
 // Backend endpoint placeholder. Replace with your secure API endpoint.
 try{
   // Example: await fetch('/api/contact',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify(Object.fromEntries(new FormData(form)))});
   await new Promise(r=>setTimeout(r,700));
   status.textContent='Demo mode: message validated successfully. Connect this form to your backend/Formspree/EmailJS.';
   form.reset();
 }catch{status.textContent='Something went wrong. Please try again.'}
});