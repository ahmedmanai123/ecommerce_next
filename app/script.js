let searchForm = document.querySelector('.Search-Form');
document.querySelector('#Search-Btn').onclick = () => {
  searchForm.classList.toggle('Active');
  navbar.classList.remove('Active');
};

    
        let navbar = document.querySelector('.navbar');
    
        document.querySelector('#menu-btn').onclick = () =>{
          navbar.classList.toggle('active');
          searchForm.classList.remove('active');
        }
    
        window.onscroll = () =>{
          searchForm.classList.remove('active');
          navbar.classList.remove('active');
        }
    
        let filterBtn = document.querySelectorAll('.filter-buttons .buttons');
        let filterItem = document.querySelectorAll('.products .box-container .box');
    
        filterBtn.forEach(button =>{
    
          button.onclick = () =>{
            filterBtn.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
    
            let dataFilter = button.getAttribute('data-filter');
    
            filterItem.forEach(item =>{
    
              item.classList.remove('active');
              item.classList.add('hide');
    
              if(item.getAttribute('data-item') == dataFilter || dataFilter == 'all'){
                item.classList.remove('hide');
                item.classList.add('active');
              }
    
            });
    
          };
    
        });
    
        
    
       
    