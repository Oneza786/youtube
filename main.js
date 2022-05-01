// https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=kgf%202&key=[YOUR_API_KEY]
 const api = "AIzaSyAYqx-PDUhUbTVMXdnZvEgfHUu8mhayscM";

const searchVideo = async () =>
{
    try{
        const q= document.getElementById("query").value;

        const res = await fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=30&q=${q}%202&key=${api}`)

        const data = await res.json();

        
        appendData(data.items)
        console.log(data.items)
    }
   
    catch(err)
    {
        console.log(err)
    }
} 


const appendData = (video) => 
{
    let showVideo=document.getElementById("showVideos");

        showVideo.innerHTML=null;
    video.forEach(({id:{videoId},snippet:{title}})=>
    {
        
        let div = document.createElement("div");

        let iframe=document.createElement("iframe");
        iframe.src=`https://www.youtube.com/embed/${videoId}`
        iframe.width="110%";
        iframe.height="70%";
        iframe.allow="fullscreen";
        iframe.style.border="none"

        let name1= document.createElement("h5");
        name1.innerText=title;

        div.append(iframe,name1);
        let data={
            title,
            videoId,
        }
        div.onclick=() =>
        {
            showVideos(data);
        }
        showVideo.append(div);
    })
}

const showVideos = (x) =>
{
    localStorage.setItem("video", JSON.stringify(x));
    window.location.href="video.html";
}