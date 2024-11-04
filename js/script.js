 
document.querySelector('#lib').addEventListener('keydown', (e)=>{
    if (e.key === 'Enter') {
        saveLib(document.querySelector('#lib').value, 0)
    }
})
function saveLib(lib, nbr) {
    const libItem = document.createElement('div');
    const div = document.createElement('chris');
    const span = document.createElement('span')
    const span2 = document.createElement('span')
    span.className = "material-icons"
    span.textContent = "label"
    const p = document.createElement('p')
    p.textContent = lib;
     div.appendChild(span)
     div.appendChild(p)
     span2.textContent= nbr
     libItem.appendChild(div)
     libItem.appendChild(span2)
    document.querySelector('.allLib').appendChild(libItem);
    let tb = {
        nom : lib,
        nbr : nbr
    }
    const libs = JSON.parse(localStorage.getItem('libelles')) || [];
    libs.push(tb)
    localStorage.setItem('libelles', JSON.stringify(libs));
    document.querySelector('#lib').value = "";
}
function loadLib() {
    const libelles= JSON.parse(localStorage.getItem('libelles')) || []; 
    libelles.forEach(lib => {
        const libItem = document.createElement('div');
        const div = document.createElement('chris');
        const span = document.createElement('span')
        const span2 = document.createElement('span')
        span.className = "material-icons"
        libItem.className = "trierContac"
        span.textContent = "label"
        const p = document.createElement('p')
         p.className = "libi"
        span2.className = "nbri"
        p.textContent = lib.nom;
         div.appendChild(span)
         div.appendChild(p) 
         span2.textContent=lib.nbr
         libItem.appendChild(div)
         libItem.appendChild(span2)
        document.querySelector('.allLib').appendChild(libItem);
            libItem.style.cursor="pointer"
          libItem.addEventListener('click', ()=>{
              trierContact(lib.nom)
          })
    });
   }
   window.addEventListener('load', loadLib);  
   //localStorage.removeItem('contact')


   function loadLib_select() {
    
    const libellesss= JSON.parse(localStorage.getItem('libelles')) || []; 
    libellesss.forEach(lib => {
        const div = document.createElement('button');
        const span = document.createElement('span')
        const p = document.createElement('p')
         p.className = "libi"
        span.className = "nbri"
        p.textContent = lib.nom;
         span.textContent= lib.nbr
       div.appendChild(p)
       div.appendChild(span)
         document.querySelector('.btn_add_lib').appendChild(div) 
       
        let libInput = document.getElementById('libValue')
        libInput.disabled = true 
      
    div.addEventListener('click', ()=>{
        libInput.value = p.textContent;
        document.querySelector('.libelle2').style.display= 'none'
   
    })
   });
 
   }



   function sendForm(){
        let inputs =  document.querySelectorAll('form input')
        let save = document.getElementById('save')
        let etat = new Array(inputs.length).fill(false);
        for (let i = 0; i < etat.length; i++) {
            inputs[i].addEventListener('change', ()=>{ 
                etat[i] = true
                etat[0] = true
                etat[1] = true
                if (etat[2] === true && etat[3] === true && etat[4] === true &&  etat[5] === true && etat[6] === true && etat[7] === true) {
            save.classList.replace('inactive', 'active')
         
        }
        else{
            save.classList.replace('active','inactive')
            
        }
        });
     
    }
    save.addEventListener('click', ()=>{
        let id = 0
        const getUserId = JSON.parse(localStorage.getItem('contacts')) || [];
                    getUserId.forEach(lib => { 
                            id = id + 10
                        
                    });
        if (save.className === "active") { 
          
            const tb = {
                id : id,
                nom : inputs[3].value,
                prenom : inputs[2].value,
                libelle: inputs[1].value,
                entreprise : inputs[4].value,
                fonction : inputs[5].value,
                email: inputs[6].value,
                telephone: inputs[7].value
            }
            const idUser = document.getElementById('idUser').value
              if (idUser === "") {
                    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
                    const libelles = JSON.parse(localStorage.getItem('libelles')) || [];
                    libelles.forEach(lib => {
                        if (inputs[1].value === lib.nom) {
                            let nn = lib.nbr
                            lib.nbr = (parseInt(nn, 10) || 0) + 1;
                        }
                    });
                    localStorage.setItem('libelles', JSON.stringify(libelles))
                    contacts.push(tb)  
                    localStorage.setItem('contacts', JSON.stringify(contacts));
                    const mainSection = document.querySelectorAll('.main-section');
            mainSection[1].style.display = 'none';
            mainSection[0].style.display = 'block';
            const htp = document.querySelector('.contact');
        htp.style.display = 'block';
        document.querySelector('.Empty').style.display = 'none';
            inputs.forEach(input => {
                input.value = "";
            }); 
           // cccc.insertBefore(tr, cccc.firstChild) 

           document.querySelector('.cont').innerHTML = '';
           loadContact()
           document.querySelector('.allLib').innerHTML='';
           loadLib();

            
       }else{ 
            const conts = JSON.parse(localStorage.getItem('contacts')) || [];
            conts.forEach(cont => {
               
                if (idUser == cont.id) {
                    cont.nom = tb.nom
                    cont.prenom = tb.prenom
                    cont.email = tb.email
                    cont.fonction = tb.fonction
                    cont.entreprise = tb.entreprise
                    cont.libelle = tb.libelle
                    cont.telephone = tb.telephone
                }
            });
            localStorage.setItem('contacts', JSON.stringify(conts))
            const mainSection = document.querySelectorAll('.main-section');
            mainSection[1].style.display = 'none';
            mainSection[0].style.display = 'block';
            document.querySelector('.cont').innerHTML = '';
           loadContact()
        }
                 }
    })
   
       
   }
sendForm()

function loadContact() {
    let contacts= JSON.parse(localStorage.getItem('contacts')) || []; 
    contacts = contacts.reverse()
    contacts.forEach(contact => { 
        let tr = document.createElement('tr')
        let td =document.createElement('td')
        let td2 =document.createElement('td')
        let td3 =document.createElement('td')
        let td4 =document.createElement('td')
        let td5 =document.createElement('td')
        let button =document.createElement('button') 
        td5.appendChild(button)
        td5.style = "display: flex; flex-direction: row; align-items: center;gap: 10px;" 
        let span = document.createElement('span')
        span.classList.add('imgP')
        let span2 = document.createElement('span') 
         span.textContent = contact.prenom[0] 
        td.appendChild(span); 
        td.appendChild(span2);
        td.style = "display: flex; flex-direction: row; align-items: center;gap: 20px;"
        span2.textContent = contact.prenom + " "+ contact.nom
        td2.textContent = contact.email
        td4.textContent = contact.fonction + ", " + contact.entreprise
        td3.textContent = contact.telephone
        button.textContent = contact.libelle
        tr.appendChild(td)
       tr.appendChild(td2)
       tr.appendChild(td3)
        tr.appendChild(td4)
        tr.appendChild(td5)
        tr.className = "tr_tetu"
        document.querySelector('.cont').appendChild(tr) 
         const divvv = document.createElement("div")
          const span3 = document.createElement('span')
            span3.className = "material-icons"
            span3.textContent = "edit"
            const span4 = document.createElement('span')
            span4.className = "material-icons"
            span4.textContent = "delete"
           
            divvv.classList.add('btn_plus')
          divvv.style="opacity: 0;top: 16px;"
            divvv.appendChild(span3)
            divvv.appendChild(span4)
            tr.appendChild(divvv)
        tr.addEventListener('mouseenter', ()=>{ 
             divvv.style="opacity: 1;top: -8px;"
        })
        tr.addEventListener('mouseleave',()=>{
              divvv.style="opacity: 0;top: 16px;"
        })
        span3.addEventListener('click', ()=>{
            const mainSection = document.querySelectorAll('.main-section');
            mainSection[0].style.display = 'none';
            mainSection[1].style.display = 'block';
            const form = document.querySelectorAll('form input')
            form[2].placeholder = contact.prenom
            form[2].placeholder = contact.prenom
            form[2].placeholder = contact.prenom
            form[3].placeholder = contact.nom
            form[4].placeholder = contact.entreprise
            form[5].placeholder = contact.fonction
            form[6].placeholder = contact.email
            form[7].placeholder = contact.telephone
            document.getElementById('idUser').value = contact.id
        })
        span4.addEventListener('click', ()=>{
            document.querySelector('.delete').style.display="flex"
        })
        document.querySelector('.deleteBtn').addEventListener('click', ()=>{
            const nnv = contacts.filter(con=> con.id !== contact.id)
            localStorage.setItem('contacts', JSON.stringify(nnv))
            document.querySelector('.cont').innerHTML = '';
            loadContact()
            document.querySelector('.delete').style.display="none"
        })
        const nbr = document.querySelectorAll('.nbr-contact') 
  
  nbr.forEach(el => {
    if (contacts.length>0) {
     el.textContent = contacts.length 
    } 
  });

    });
   
    if (contacts.length === 0) {
         const mainSection = document.querySelector('.contact');
         mainSection.style.display = 'none';
         document.querySelector('.Empty').style.display = 'block';
       
     }else{
         const mainSection = document.querySelector('.contact');
         mainSection.style.display = 'block';
         document.querySelector('.Empty').style.display = 'none'; 
     
    }
   }
 /*   const trier = document.querySelectorAll('.trierCont')
   trier.forEach(tr => {  
        tr.addEventListener('click', ()=>{
          
            trierContact(tr.querySelector("libi"))
        })
   }); */
   window.addEventListener('load', loadContact); 
  
 
     //localStorage.removeItem('contacts')