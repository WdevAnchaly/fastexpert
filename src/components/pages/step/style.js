import styled  from 'styled-components'
export const Step = styled.article`
.step{
    flex-direction: row;
    justify-content: space-between;
     display: flex;
}
.newHeader {
background: #fff;
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
  color: #000;
  display: block;
}

.header a span{
  font-size: 20px;
  line-height: 24px;
  color: #000;
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
  color: #000;
}

.bg-step{
background-color: #f5f7fc;
}
.mainpage {
margin: 0 auto;
overflow: hidden;
position: relative;
min-height: 100%;
}
.main_container {
width: 904px;
margin: 0px auto;
position: relative;
margin-top: 40px;
margin-bottom: 40px;
border-radius: 20px;
background: #fff;
box-shadow: 0px 3px 15px rgb(90 116 126 / 16%);
overflow: hidden;
}
#slider {
position: relative;
overflow: hidden;
margin: 20px auto 0;
width: 100% !important;
background: #fff;
}
#slider ul {
position: relative;
margin: 0;
padding: 0;
list-style: none;
width: 100% !important;
margin: 0px !important;
}
#slider ul li {
position: relative;
display: block;
float: left;
width: 100%;
min-height: 598px;
text-align: center;
}
.work_progress {
width: 146px;
margin: 0 auto;
position: relative;
bottom: 0;
top: 24px;
right: 60px;
float: right;
}
.work_progress .step_span {
font-weight: normal;
font-size: 14px;
text-align: center;
color: #999;
margin: 0px 0 10px;
display: inline-block;
} 
.work_progress .ui_progress_bar {
height: 10px;
border-radius: 5px;
background: rgba(131, 155, 167, 0.19);
position: relative;
}
.work_progress .ui-progress {
position: absolute;
top: 0;
background: #84C1E2;
height: 4px;
border-radius: 3px;
margin-top: 3px;
margin-left: 5px;
}  
#slider ul li .header {
padding: 0px 0 20px;
} 
.mt_40 {
margin-top: 40px;
margin-left: 135px;
}
.COMM-TITLE {
font-size: 24px !important;
/* font-family: 'proximanovabold' !important; */
color: #333 !important;
font-weight: normal !important;
margin-bottom: 10px;
display: block;
} 
.clickbtn.NOMARGIN {
margin: 0px auto 10px !important;
width: 35%;
}
.TOPPADDING50 {
padding-top: 50px;
}
.clickbtn input[type=radio] + label, .clickbtn input[type=checkbox] + label {
display: inline-block;
padding: 20px 0;
font-size: 18px;
color: #116EE0;
text-align: center;
cursor: pointer;
border-radius: 5px;
width: 100%;
border: 1px solid #116EE0;
background: rgba(0, 0, 0, 0) linear-gradient(to bottom, #fff 0%, #fff 100%) repeat scroll 0 0;
margin-bottom: 6px;

}
.clickbtn input[type=radio], .clickbtn input[type=checkbox] {
display: none;
}
.step2-txt{
font-weight: 600;
font-size: 14px;
text-align: center;
color: #333;
margin: 20px 0 0 0;
}
.hover-div:hover {
background: #EBFFE2;
border: 1px solid #EBFFE2;
color: #333 !important;
box-shadow: 3px 6px 12px rgb(110 178 209 / 21%) !important;
}


@media (hover: hover) and (pointer: fine){
.go20form .clickbtn.active input[type=radio] + label, .go20form .clickbtn input[type=radio] + label:hover, .go20form .clickbtn input[type=checkbox] + label:hover, .simplenext:hover {
background: #EBFFE2;
border: 1px solid #EBFFE2;
color: #333 !important;
box-shadow: 3px 6px 12px rgb(110 178 209 / 21%) !important;
outline: none;
}}


.header {
  padding-top: .5em;
  padding-bottom: .5em;
  font-size: 14px;
  line-height: 24px;
  color: #fff;
  letter-spacing: 1px;
  font-weight: 400;
  
}

.step3 h5{
    color:#333;
}
.step3 {
    border: 1px solid #F3F3F3;
    background: #F3F3F3;
    font-weight: normal;
    font-size: 18px;
    color: #000;
    padding: 15px 0;
    width: 37%;
    border-radius: 8px;
}
.box{
    margin : 9px auto;
}


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