import React,{Component} from 'react';
import {Card, CardImg,  CardText,Button, CardBody, CardTitle,Breadcrumb,BreadcrumbItem, Label, FormGroup} from 'reactstrap';
import {  Modal, ModalHeader, ModalBody,
    Form, Input} from 'reactstrap';
import {Link} from 'react-router-dom'
import { Loading } from './LoadingComponent';
import { baseUrl } from '../shared/baseUrl';

class CommentForm extends Component{
    constructor(props){
super(props)
this.state={
    isModalOpen: false,
 
}
this.toggleModal=this.toggleModal.bind(this)
this.handleSubmit=this.handleSubmit.bind(this)
    }

    toggleModal() {
        this.setState({
          isModalOpen: !this.state.isModalOpen
        });
      }
      handleSubmit(event){
        this.toggleModal();
        this.props.postComment(this.props.dishId, this.rate.value, this.firstname.value, this.textarea.value);

          alert("Username: " + this.firstname.value + " Password: " + this.textarea.value+ " rate: " + this.rate.value)
         event.preventDefault();

        }
    
    render(){
        const required = (val) => val && val.length;
        const maxLength = (len) => (val) => !(val) || (val.length <= len);
        const minLength = (len) => (val) => val && (val.length >= len);
        return(
            <>
             <Button  color='primary' onClick={this.toggleModal} >Submit Comment</Button>
 <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal} >
                    <ModalHeader toggle={this.toggleModal}>Add Comment</ModalHeader>
                    <ModalBody>
                        
                    <Form onSubmit={this.handleSubmit} >
                           <FormGroup>
                           <Label htmlFor="rate">Rate</Label>
                        <Input type='select' id='rate' name='rate' className='ratting'
                         innerRef={(input) => this.rate = input}>
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>

                        </Input>

                           </FormGroup>

                            <FormGroup>
                                <Label htmlFor="firstname">Your Name</Label>
                                <Input type='text' id="firstname" name="firstname"
                                        placeholder="Your Name"
                                        innerRef={(input) => this.firstname = input}  />
                                        
                            </FormGroup>
                            <FormGroup>
                                <Label htmlFor="textarea">Comment</Label>
                                <Input type="textarea" id="textarea" name="textarea"
                                    innerRef={(input) => this.textarea = input} Row={6} />
                            </FormGroup>
                            
                            <Button type="submit" value="submit" color="primary">Submit</Button>
                        </Form>
                    </ModalBody>
                </Modal>            
                </>
        )
    }

}







function  RenderDish({dish,isLoading,errMess}) { 
    if (isLoading) {
        return(
            <div className="container">
                <div className="row">            
                    <Loading />
                </div>
            </div>
        );
    }
    else if (errMess) {
        return(
            <div className="container">
                <div className="row">            
                    <h4>{errMess}</h4>
                </div>
            </div>
        );
    }
    else if (dish != null)
       { 

           return ( 

                <Card> 

                    <CardImg top src={baseUrl + dish.image} alt={dish.name} />

                    <CardBody> 

                        <CardTitle>{dish.name}</CardTitle> 

                        <CardText>{dish.description}</CardText> 

                    </CardBody> 

                </Card> 

            ); 

        } 

        else 

            return ( 

                <div></div> 

           ); 

    } 

    

   const RenderComments = ({comments, postComment, dishId}) => { 
         
            var mapping =comments.map((comment) => { 
                return ( 
                    
                    <div key ={comment.id}> 

                        <ul>{comment.comment}</ul> 

                        <ul>--{comment.author} {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit' }).format(comment.date.toLocaleDateString)} </ul> 

                    </div> 
                    
                ); 

            }); 

 

            return ( 

                <div> 

                    <h1>Comments:</h1> 

                    {mapping}
                    <CommentForm dishId={dishId} postComment={postComment} />
                               </div> 

            ); 

        } 

    

        

 

    

    const DishDetail =({ dish,isLoading,errMess,comments,postComment})=>{ 
   
        return ( 

            <div className="container"> 
                  <div className='row'>
                        <Breadcrumb>
                        <BreadcrumbItem><Link to="/menu" >Menu </Link> </BreadcrumbItem>
                        <BreadcrumbItem active>{dish.name} </BreadcrumbItem>
                        </Breadcrumb>
                        <div className='col-12'>
                            <h3>{dish.name}</h3>
                            <hr/>
                        </div>
                        </div>  
            <div className="row"> 

                <div className="col-12 col-md-5 m-1"><RenderDish dish ={dish}  isLoading={isLoading} errMess={errMess}/></div> 

                <div className="col-12 col-md-5 m-1">  <RenderComments comments={comments}
        postComment={postComment}
        dishId={dish.id}
      />
      </div> 

            </div > 

            </div> 

        ); 

    } 

 

 

export default DishDetail;