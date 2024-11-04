function SearchContact(valeur) {
    const search = document.getElementById('searchInput')
    const contDiv = document.querySelector('.cont')
    let contactss= JSON.parse(localStorage.getItem('contacts')) || []; 
    contactss = contactss.reverse()
    search.addEventListener('input', ()=>{
        const searchInput = search.value.toLowerCase()
        const result = contactss.filter(cont=> 
            cont.nom.toLowerCase().includes(searchInput) ||
            cont.prenom.toLowerCase().includes(searchInput)||
            cont.email.toLowerCase().includes(searchInput)||
            cont.telephone.toLowerCase().includes(searchInput)||
            cont.fonction.toLowerCase().includes(searchInput)||
            cont.entreprise.toLowerCase().includes(searchInput)
        )
        
        contDiv.innerHTML='';
        if (result.length>0) {
    result.forEach(contact => {
        if (contact.nom.incl === valeur) {
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
        contDiv.appendChild(tr) 

        
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
          const nnv = contactss.filter(con=> con.id !== contact.id)
          localStorage.setItem('contacts', JSON.stringify(nnv))
          document.querySelector('.cont').innerHTML = '';
          loadContact()
          document.querySelector('.delete').style.display="none"
      })
        
const nbr = document.querySelectorAll('.nbr-contact') 
  
  nbr.forEach(el => {
    if (contactss.length>0) {
     el.textContent = contactss.length 
    } 
  });}

    }); }  
   
    if (contactss.length === 0) {
         const mainSection = document.querySelector('.contact');
         mainSection.style.display = 'none';
         document.querySelector('.Empty').style.display = 'block';
       
     }else{
         const mainSection = document.querySelector('.contact');
         mainSection.style.display = 'block';
         document.querySelector('.Empty').style.display = 'none'; 
     
    }     })
    
   }
  
 SearchContact()
