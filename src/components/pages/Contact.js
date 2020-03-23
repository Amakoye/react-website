import React, {Component} from 'react';
import Field from '../common/Field';
import {withFormik} from 'formik';
import * as Yup from 'yup';

const fields = {
    sections:
     [
         [
            {name:'name', elementName:'input', type:'text', id:'name', placeholder:'Your name*'},
            {name:'email', elementName:'input', type:'Email', id:'name', placeholder:'Your email*'},
            {name:'phone', elementName:'input', type:'text', id:'phone', placeholder:'Your phone*'}
        ],
        [   
            {name:'message', elementName:'textarea', type:'text', id:'message', placeholder:'Your message*'}
        ]
    ]
    
}


class Contact extends Component{
    /* constructor(props){
        super(props);

        this.state = {
            name:'',
            email:'',
            phone:'',
            message:''
        }
    } */

  /*   submitForm = (e)=>{
        e.preventDefault();
        alert("Form submitted. Thank you very much");
    } */

    render(){
        return (
        <section className="page-section" id="contact">
            <div className="container">
            <div className="row">
                <div className="col-lg-12 text-center">
                <h2 className="section-heading text-uppercase">Contact Us</h2>
                <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12">
                <form id="contactForm" name="sentMessage" novalidate="novalidate" onSubmit={this.props.handleSubmit}>
                    <div className="row">
                        {fields.sections.map((section,sectionIndex)=>{
                            return(
                                <div className="col-md-6" key={sectionIndex}>
                                    {section.map((field,i)=>{
                                        return <Field 
                                            {...field} 
                                            key={i}
                                           /*  value={this.state[field.name]}
                                            onChange={e => this.setState({[field.name]:e.target.value})} */
                                            value={this.props.values[field.name]}
                                            name={field.name}
                                            onChange={this.props.handleChange}
                                            onBlur={this.props.handleBlur}
                                            touched={(this.props.touched[field.name])}
                                            errors={this.props.errors[field.name]}
                                        />
                                    })}
                                </div>
                            )
                        })}
                    <div className="clearfix"></div>
                    <div className="col-lg-12 text-center">
                        <div id="success"></div>
                        <button 
                             
                            className="btn btn-primary btn-xl text-uppercase" 
                            type="submit"
                            >Send Message</button>
                    </div>
                    </div>
                </form>
                </div>
            </div>
            </div>
        </section>
        );
    }
}

export default withFormik({
    mapPropsToValues: ()=>({
        name:'',
        email:'',
        phone:'',
        message:''
    }),
    /* validate: values=>{
        const errors = {};
        Object.keys(values).map(v =>{
          if(!values[v]){
              errors[v] = "Required";
          } 

        })
        return errors;
    }, */
    validationSchema: Yup.object().shape({
        name: Yup.string().required('You must give us your name'),
        email: Yup.string().email('Give a valid email').required('Email is required'),
        phone: Yup.string().min(10,'please provide your 10 digit phone number')
        .max(15,'Your number is too long').required('phone number is required'),
        message: Yup.string().min(500, 'Provide more info').required('Message is required')
    }),
    handleSubmit: (values, {setSubmitting}) =>{
        alert("You've submitted the form!", JSON.stringify(values));
    }
})(Contact);