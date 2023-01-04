import React from 'react'
import Footer from '../Footer/Footer'
import EnquiryForm from '../Home/EnquiryForm'
import Header from '../Home/Header'
import group from '../Home/assets/group.png'

function About() {
  return (
    <div>
      <Header></Header>

      <section style={{ textAlign: 'center',width:"100%",height:'60vh',marginBottom:'14rem'}}>
        <img style={{ width:'53rem'}} src={group} alt="" />
      </section>
     
      <section style={{display:'flex',alignItems:'center',justifyContent:'center',width:'100%'}}>
        <div style={{width:'60%'}}>
        <h1 style={{margin:'0',fontWeight:'lighter',color:'#0E8B8F'}}>About EBD Group</h1> <br />
        <div style={{ background: '#0E8B8F', width: '3rem', height: '1px' }}></div>
        <p style={{textAlign:'justify'}}>Estate Builders & Developers was launched at the onset of the second millennium, as a contract construction company. With deep dedication & hard work of the team, it fixed firmly and settled well versed in the field. Quality, punctuality and the perfection in all the works lead to many major dignified projects, which in turn lead EBD to be upgraded as an architectural and developmental firm in the year 2019. It also came up with an extremely glorious project called EALA STAYS in the year 2020. It was a grand and major milestone in the history of EBD.</p>
        </div>
     

        
      </section>

      <EnquiryForm></EnquiryForm>
      <Footer></Footer>

    </div>
  )
}

export default About