<div className="left">
        <div className="imgContainer">
{    /**        <img src={introImg} alt= 'backgroundImage' className="introImg"/>
*/}          
 <div className="textBox">
           <span>W</span>
           <span>E</span>
           <span>L</span>
           <span>C</span>
           <span>O</span>
           <span>M</span>
           <span>E</span>
           </div>
        </div>
      </div>

      <div className="right">
        <div className="wrapper">
          <h2>Hi, I am</h2>
          <h1>Megha</h1>
          <h3>
            Freelance 
            <span ref={textRef}></span>
            <ul className="dynamicText">
            <li><span>Designer</span></li>
            <li><span>Developer</span></li>
            </ul>
          </h3>
        </div>
        <a href="#portfolio">
          {/** <img src="" alt= ''/>  - down arrow */ }
          <ArrowDownwardIcon  className="arrowIcon"/>
        </a>
      </div>


      for css 

      .left {
        flex: 0.5;
        overflow: hidden;
    
        .imgContainer{
          width: 700px;
          height: 700px;
          // background-color: crimson;
          border-radius: 50%;
          display: flex;
          float: right;
          align-items:center;
          justify-content:right;
    
       
          .textBox{
             font-size: 70px;
             font-family: sans-serif;
             position: absolute;
             transform: translate(-50%, -50%);
    
             span{
                display: inline-block;
                font-weight:bolder;
                animation: mover 6s infinite;
                color: crimson;
             }
             
             @keyframes mover{
                0%{
                   text-shadow: 0 0 30px rgba(0,0,0,0);
                }
                50%{
                   text-shadow: 0 0 10px rgba(0,0,0,0.30);
                   transform: translateY(30px);
                }
                100%{
                   text-shadow: 0 0 30px rgba(0,0,0,0);
                }
             }
    
             span:nth-child(1){
                animation-delay: 0.5s;
             }
             span:nth-child(2){
                animation-delay: 1s;
             }
             span:nth-child(3){
                animation-delay: 1.5s;
             }
             span:nth-child(4){
                animation-delay: 2s;
             }
             span:nth-child(5){
                animation-delay: 2.5s;
             }
             span:nth-child(6){
                animation-delay: 3s;
             }
             span:nth-child(7){
                animation-delay: 3.5s;
             }
          }
    
        }
      }
      .right {
        flex: 0.5;
    
        .wrapper {
          width: 100%;
          height: 100%;
          padding-left: 50px;
          display: flex;
          flex-direction: column;
          justify-content: center;
          position: relative;
    
          h1 {
             font-size: 60px;
             margin: 10px 0;
          }
          h2 {
             font-size: 35px;
          }
          h3 {
             font-size: 30px;
    
             // span{
             //    // font-size: 30px; or
             //    font-size: inherit;
             //    color: crimson;
    
             //    .ityped-cursor{
             //       animation: blink 1s infinite;
             //    }
    
             //    @keyframes arrowBlink {
             //       50%{
             //          opacity: 1;
             //       }
             //       100%{
             //          opacity: 0;
             //       }
             //    }
             // }
          }
        }
        a{
          position: absolute;
          bottom: 10px;
          left: 60%;
    
          .arrowIcon{
             width: 30px;
             text-decoration: none;
             color: black;
             animation: arrowBlink 2s infinite;
          }
    
          @keyframes arrowBlink {
             100%{
                opacity: 0;
             }
          }
        }
      }