import React, { Component } from 'react';

class IntroOfClassCompo extends Component {
    render() {
        return (
            <>
                <h2>Class Compo</h2>
                <h3>Component</h3>
                <p>Components let you split the UI into independent, reusable pieces, and think about each piece in isolation. This page provides an introduction to the idea of components. You can find a detailed component API reference here.</p>
                <p>in reactJs we have two ways to create a compo Function and Class Components</p>
                <h3>Class Component</h3>
                <blockquote>
                    class Welcome extends React.Component &#123;
                        render() &#123;
                            return &lt;h1&gt;Hello, &#123;this.props.name&#125;&lt;/h1&gt;;
                            &#125;
                            &#125;
                </blockquote>
                <h3>Functional Component</h3>
                <blockquote>
                    <span className='text-primary'>function</span> <span className='text-info'>Welcome(props)</span>  &#123; <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; return &lt;h1&gt;Hello, &#123;props.name&#125;&lt;/h1&gt;; <br />
                    &#125;<br />
                </blockquote>
            </>
        );
    }
}

export default IntroOfClassCompo;