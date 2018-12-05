import React from 'react';
import '../assets/styles/vendor/bootstrap.css';
import '../assets/styles/styles.css';
import data from './websites.json';

class IndexPage extends React.Component{

  state = {
    websites: data
  }

  componentDidMount(){
    //console.log(this.state.websites);
  }

  render (){

    return (

      <div className="container-fluid">
        <div className="row bg-black px-5">

          {
            this.state.websites.map(

              (website) => {

                return (

                  <div className="col-md-4 card p-2 bg-transparent border-0 mb-5">

                    <a href={website.url} target="blank" ><img src={'//image.thum.io/get/width/600/crop/600/' + website.url } className="mb-0 img-fluid" /></a>

                    <div className="card-body pb-0 text-center">

                      <a href={website.url} className="card-link text-white" target="blank">{website.name}</a>

                    </div>

                  </div>

                );

              }

            )
          }
        </div>
      </div>
    );

  }
}

export default IndexPage;
