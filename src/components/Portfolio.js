import React, { Component } from 'react';
export default class Portfolio extends Component {
  render() {
    let pageData = this.props.pageData;
    return (
      <section id="portfolio">
      <div className="row">
        <div className="twelve columns collapsed">
          <h1>Check Out Some of My Works.</h1>
          <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
          {
            pageData.portfolio && pageData.portfolio.map((item, i)=>{
              return(
                <div className="columns portfolio-item" key={i}>
                  <div className="item-wrap">
                    {/* <a href="#modal-01"> */}
                    <img src={item.imgurl} className="item-img" alt="logo"/>
                      {/* <div className="overlay">
                        <div className="portfolio-item-meta"> */}
                          <h5>{item.name}</h5>
                          <p>{item.description}</p>
                        {/* </div>
                      </div> */}
                    {/* </a> */}
                  </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>
  </section>
        );
  }
}