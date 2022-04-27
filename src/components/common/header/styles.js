import styled  from 'styled-components'
export const Headerall = styled.article`
header.header.newHeader.bg {
  background: #0088e0;
}
.bg .main-nav a {
  color: #fff;
}
.header.bg a span {
  color: #ffffff;
}
.header.bg a:hover span {
  color: #ffffff;
}
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



.header a:hover span{
  color: #000;
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