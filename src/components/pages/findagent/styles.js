import styled  from 'styled-components'
export const Find = styled.article`
.fastExpertbg{
    background-color: #0088e0;
    font-family: proximanovaregular,sans-serif;
}
ul {
    margin: 0;
    padding: 0;
    list-style: none;
  }
  
  
  h2,
  h3,
  a {
      color: #fff;
  }
  
  a {
      text-decoration: none;
  }
  
  
  
  .logo {
      margin: 0;
      font-size: 1.45em;
  }
  .logo img {
      vertical-align: middle;
      width: 25px!important;
      margin-right: 15px;
  }
  
  .main-nav {
      margin-top: 5px;
  
  }
  .logo a,
  .main-nav a {
      padding: 10px 15px;
      
      text-align: center;
      display: block;
  }
  
  .main-nav a {
      font-size: .99em;
      text-decoration: none;
      color: #fff;
      display: block;
  }
  
  .header a span{
      font-size: 20px;
      line-height: 24px;
      color: #fff;
      letter-spacing: 1px;
      font-weight: 400;
  }
  
  #add-agent .form-group span {
      position: absolute;
      top: 12px;
      font-size: 20px;
      left: 10px;
      color: #797979;
      z-index: 9;
  }
  
  .header a:hover span{
      color: #FFF;
  }
  
  
  
  .header {
      padding-top: .5em;
      padding-bottom: .5em;
      font-size: 14px;
      line-height: 24px;
      color: #fff;
      letter-spacing: 1px;
      font-weight: 400;
      
  }
  
  
  
  .slide_section.container-nhfest {
      width: 100%;
      float: left;
      display: block;
      background: #0088e0;
  }
  .slide_section.container-nhfest .slider-caption {
      position: relative;
      padding: 50px 0;
      color: #fff;
      text-align: center;
      z-index: 1;
  }
  .slide_section.container-nhfest .slider-caption .caption-inner.Full-WiDtH-InNR {
      width: 100%;
  }
  .caption-inner .tabs-search {
      width: 100%;
      margin: 0 auto 0;
      font-family: proximanovaregular,sans-serif;
  }
  .tab-pane.active {
      width: 443px;
      margin: 30px auto 0;
      padding:45px 15px 42px;
      border-radius: 20px;
      background-color: #fff;
      display: block;
  }
  .caption-inner h1.slider-title {
      font-size: 52px;
      font-weight: 400;
      line-height: 61px;
      margin: 0 0 10px;
      padding: 0;
      color: #fff;
      font-family: proximanovaregular,sans-serif;
      text-transform: inherit;
      text-align: center;
      
  }
  #add-agent .input-group {
      border: 0 solid #ccc;
      border-radius: 4px;
      width: 100%;
      display: block;
      float: none;
      margin: 0 auto;
  }
  .group-s.RadIOSeCtIOnIndexPageSGroPu {
      padding: 0;
  }
  .input-group .group-s {
      display: block;
      padding: 0;
      width: 100%;
      border-radius: 4px;
      padding: 20px 30px;
  }
  .group-s.RadIOSeCtIOnIndexPageSGroPu h2 {
      font-family: proximanovabold,sans-serif;
      color: #333;
      font-size: 38px;
      line-height: 42px;
      margin: 0 0 30px;
      font-weight: 500;
      text-align: center;
  }
  .input-group .group-s .form-group {
      position: relative;
  }
  #add-agent .input-group input{
      display: inline-table;
      width: 100%;
      float: none;
      height: 55px;
      font-size: 20px;
      color: #797979;
      border-style: solid;
      border-width: 1px;
      border-color: #a9a9a9;
      border-radius: 10px;
      background-color: #fff;
      text-align: left;
      margin-bottom: 0;
      padding: 0 10px 0 30px!important;
      letter-spacing: inherit;
      font-family: proximanovaregular;
      border-radius: 10px!important;
      white-space: nowrap;
      text-overflow: ellipsis;
  }
  .input-group-btn._send-button {
      margin-top: 30px;
  }
  .input-group-btn._send-button {
      display: block;
      width: 100%;
  }
  .input-group .input-group-btn .btn-primary {
      font-size: 20px;
      color: #101010;
      font-weight: 700;
      text-transform: uppercase;
      border-style: solid;
      border-width: 1px;
      border-color: #f7b100;
      border-radius: 10px;
      height: 55px;
      padding: 0;
      background-image: linear-gradient(90deg,rgb(247,177,0) 0%,rgb(255,205,0) 100%);
      background-image: -moz-linear-gradient(90deg,rgb(247,177,0) 0%,rgb(255,205,0) 100%);
      background-image: -webkit-linear-gradient(90deg,rgb(247,177,0) 0%,rgb(255,205,0) 100%);
      background-image: -ms-linear-gradient(90deg,rgb(247,177,0) 0%,rgb(255,205,0) 100%);
      box-shadow: inset 0 -1px 0 0 rgb(143 126 0 / 0%);
      width: 100%;
      padding-top: 3px;
  }
  .caption-inner p.slider-subtitle {
      padding-bottom: 25px;
      text-align: center;
      text-shadow: none;
      font-family: proximanovalight,sans-serif;
      font-size: 21px;
      color: #fff;
      margin: 0;
      line-height: 25px;
      padding-top: 35px;
  }
  
  /* ================================= 
    Media Queries
  ==================================== */
  
  
  
  
  @media (min-width: 250px) {
      .header,
      .main-nav {
          display: flex;
      }
      .header {
          
          flex-direction: row;
          justify-content: space-between;
      
      }
  
  }
  
  @media (min-width: 1025px) {
      .header {
          flex-direction: row;
          justify-content: space-between;
      }
  
  }
`;