window.onscroll = function() {btt()};

  function btt() {
  if (document.body.scrollTop > 20|| document.documentElement.scrollTop > 20)

   {maindiv.style.boxShadow="3px 8px 15px -11px black";}
  else
       {maindiv.style.boxShadow="none"}

  if (document.body.scrollTop > 150|| document.documentElement.scrollTop > 150)

    {
    maindiv.style.position="fixed"
    maindiv.style.height="50px";
    maindiv.style.backgroundColor= "#98b8db44";
    maindiv.style.position="fixed"
    logoimg.style.transform="rotate(360deg)"
  }
  else
   {maindiv.style.height="80px"
   maindiv.style.position="fixed"
   maindiv.style.backgroundColor= "rgb(299, 299, 299, 0.171)";
   logoimg.style.transform="rotate(190deg)"
  }

 if (document.body.scrollTop > 40|| document.documentElement.scrollTop > 40)
    {back.style.animationName="anim1";
    front.style.animationName="animfront1";
    back.style.animationDirection="reverse";
    front.style.animationDirection="reverse";
    back.style.paddingLeft="0"
    front.style.paddingRight="0"
    back.style.position="absolute"
    front.style.position="initial"
    back.style.zIndex="1"
    front.style.zIndex="0"
  }
  else
    {back.style.animationName="anim3";
    front.style.animationName="animfront3";
    back.style.paddingLeft="150px"
    front.style.paddingRight="350px"
    }
  if (document.body.scrollTop > 550 || document.documentElement.scrollTop > 550)
   {cam1.style.animationName="anim1";
    cam2.style.animationName="animfront1";
    cam1.style.animationDirection="reverse";
    cam1.style.paddingLeft="0"
    cam2.style.paddingRight="0"
    cam1.style.position="absolute"
    cam2.style.position="initial"
    cam1.style.zIndex="1"
    cam2.style.zIndex="0"
  }
  else
    {cam1.style.animationName="anim3";
    cam2.style.animationName="animfront3";
    cam1.style.paddingLeft="150px"
    cam2.style.paddingRight="350px"
  
  }
if (document.body.scrollTop > 850|| document.documentElement.scrollTop > 850)
    {phone.style.transform="rotate(90deg)"
    phone.style.height="500px"}
else
    {phone.style.transform="rotate(360deg)"
    phone.style.height="300px"}
}

                $(window).on('load', function() {
                    $('#loading').hide();});
                