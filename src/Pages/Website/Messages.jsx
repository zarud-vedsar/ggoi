  import React from "react";
  import '../../Components/Website/assets/css/messages.css';
  import picture1 from '../../Components/Website/assets/images/logo/Picture1.png';
  import picture2 from '../../Components/Website/assets/images/logo/Picture2.jpg';
   function Message() {
  return (
    <>
    
    <section className="py-5">
           <div className="container px-5 py-5" style={{backgroundColor: "#83210b"}}>
                <div className="row">
                     <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                        <div className="doz-mess-content">
                            <h4 className="mb-0">MESSAGE FROM PATRON</h4>
                            <p>In the present time, only through proper education system, students of backward, dalit and needy society of 
                            rural areas can be connected with the main stream of development. A person gets happiness on the attainment of 
                            the desired result; I am getting the same kind of happiness in view of Ghanshyam Group of Institutions, Prayagraj
                            as a result of my continuous efforts. The sacred aim of this college is to hunt the talent of the rural poor 
                            students who are unable to take admission in the remote university and connect them with the main stream of
                            developments. The group is continuously making meaningful efforts to fulfill its objective. It is a matter
                            of great satisfaction for me. It is my blessing that this group continues to make contribution in the service
                             of the region, society and the nation in the form of a fruit tree while flourishing and flowering like this.</p>

                             <p>Today every person in the society has become a mere consumer due to the all-encompassing expansion of marketism.
                              This is the reason that man is not able to connect with other activities of nature, society in a human way.</p>
                              
                            <p>In such a situation, there is a need of educational environment to connect the society with positive thinking.
                             Our group is making meaningful efforts in that direction.</p>

                            <p>According to the need of the times, our group is committed to imparting high level knowledge along with character
                             building, I request the regional public and parents to join us in this Bhagirath effort by getting their children 
                             admitted in it.</p>

                            <p>Principal, teachers, students and conscious parents are definitely deserving of congratulations for excellent
                              studies and high level results in the group.</p>
                        </div>
                     </div>
                     <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex justify-content-center align-items-center doz-mes-im"> 
                         <div className="doz-massage-img">
                            <img src={picture1}/>
                         </div>
                     </div>
                  </div>
               </div>
   
        <div className="container py-5">
           <div className="row">
                     <div className="col-lg-7 col-md-7 col-sm-12 col-12">
                        <div className="doz-mess-cont">
                            <h4 className="mb-0">MESSAGE FROM THE MANAGER</h4>
                            <p>Growing up on the path of rapid development in the modern scientific era, the nation needs strong 
                                children of such educated youth who are cultured and well-mannered as well as can make</p>

                             <p>proper use of the available resources and technologies. Ghanshyam Group of Institutions is a workshop for
                                 thedevelopment of such educated youth because we know that in the absence of education, wecannot imagine a 
                                 developed nation because education is the cornerstone of the nation. The futureof the nation depends on the 
                                 strong shoulders of the educated youth. It has always been mydesire that the internal and external personality 
                                 of all the students studying in this group shouldbe developed in such a way that they can become a unique identity 
                                 in the society. We are happythat the group is successfully moving towards its goal under the guidance of skilled 
                                 teachers. Our various institutes are located in rural area, whose main objective is to connect all the sections 
                                 of thesociety with the main stream of development by providing high level education. We are glad thatour group
                                  is realizing the real meaning of education and giving it a functional form. For this the principal, professors 
                                  and students deserve congratulations.</p>
                                  <p>With best wishes.</p>
                        </div>
                     </div>
                     <div className="col-lg-5 col-md-5 col-sm-12 col-12 d-flex justify-content-center align-items-center"> 
                         <div className="doz-massage-coni">
                            <img src={picture2}/>
                         </div>
                     </div>
                  </div>
               </div>
    </section>
    
    </>
      );
}

export default Message;