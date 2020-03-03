import React, { Component } from "react";

export default class Contact extends Component {
    render() {
        let pageData = this.props.pageData;
        return (
            <section id="contact">
                <div className="row section-head">
                    <div className="ten columns">
                        <p className="lead">
                            Reach out and contact me.
                        </p>
                    </div>
                </div>
                <div className="row">
                    <aside className="eighth columns footer-widgets">
                        <div className="widget">
                            <h4>
                                LinkedIn: {pageData.linkedinID}
                            </h4>
                        </div>
                    </aside>
                </div>
            </section>
        );
    }
}