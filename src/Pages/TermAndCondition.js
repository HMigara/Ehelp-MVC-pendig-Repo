import React from 'react'
import Meta from "../Components/Meta";
import BreadCrum from "../Components/BreadCrum";

const TermAndCondition = () => {
  return (
    <>
      <Meta title={" TermAndCondition"} />
      <BreadCrum title="TermAndCondition " />

      <section className="policy-wrapper py-5 home-wrapper-2">
        <div className="container-xxl">
            <div className="row">
                <div className="col-12">
                    <div className="policy">
                        <h2>all the data come from data base with admin pannel</h2>
                        <p>Lorem ipsum, dolor sit amet consectetur 
                            adipisicing elit. Dolore aperiam doloribus 
                            unde numquam, autem voluptate blanditiis. Quasi 
                            totam rerum iusto nobis nesciunt in ipsam delectus 
                            suscipit quia obcaecati perferendis dicta quae modi 
                            ad labore, sint non a aliquam facere commodi. Ipsa 
                            facere nesciunt ipsam, voluptatem doloribus enim 
                            distinctio perspiciatis officia?</p>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  );
}

export default TermAndCondition