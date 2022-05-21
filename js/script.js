const pricing = document.getElementById('plan');
const pricingBtn = document.getElementById('pricingBtn');
pricing.addEventListener("mouseover",(event)=>{
    pricingBtn.style.backgroundColor = "#F53838";
    pricingBtn.style.color="#ffffff"
})

pricing.addEventListener("mouseleave",(event)=>{
    pricingBtn.style.backgroundColor = "#ffffff";
    pricingBtn.style.color="#F53838"
})
const pricing1 = document.getElementById('plan1');
const pricingBtn1 = document.getElementById('pricingBtn1');
pricing1.addEventListener("mouseover",(event)=>{
    pricingBtn1.style.backgroundColor = "#F53838";
    pricingBtn1.style.color="#ffffff"
})

pricing1.addEventListener("mouseleave",(event)=>{
    pricingBtn1.style.backgroundColor = "#ffffff";
    pricingBtn1.style.color="#F53838"
})
const pricing2 = document.getElementById('plan2');
const pricingBtn2 = document.getElementById('pricingBtn2');
pricing2.addEventListener("mouseover",(event)=>{
    pricingBtn2.style.backgroundColor = "#F53838";
    pricingBtn2.style.color="#ffffff"
})

pricing2.addEventListener("mouseleave",(event)=>{
    pricingBtn2.style.backgroundColor = "#ffffff";
    pricingBtn2.style.color="#F53838"
})



const review = document.getElementById('review');

review.addEventListener("mouseover",(event)=>{
    review.style.borderColor = '#F53838';
    review.style.boxShadow = "2px 50px 70px 0px #cac0c0";
});
review.addEventListener("mouseleave",(event)=>{
    review.style.borderColor = "#DDDDDD";
    review.style.boxShadow = "none";

})

const review1 = document.getElementById('review1');

review1.addEventListener("mouseover",(event)=>{
    review1.style.borderColor = '#F53838';
    review1.style.boxShadow = "2px 50px 70px 0px #cac0c0";

});
review1.addEventListener("mouseleave",(event)=>{
    review1.style.borderColor = "#DDDDDD";
    review1.style.boxShadow = "none";

})

const review2 = document.getElementById('review2');

review2.addEventListener("mouseover",(event)=>{
    review2.style.borderColor = '#F53838';
    review2.style.boxShadow = "2px 50px 70px 0px #cac0c0";

});
review2.addEventListener("mouseleave",(event)=>{
    review2.style.borderColor = "#DDDDDD";
    review2.style.boxShadow = "none";

})
console.log(document.getElementById('plan2').clientHeight);