import React, { Component } from 'react';
import { Carousel, Input, Button } from '@material-tailwind/react';
import { Fade, Slide} from 'react-awesome-reveal';
import { dataBase } from '../Data/DataBase/dataBase';
import Header from './Header';
import Footer from './Footer';
import { Link } from 'react-router-dom';

function InputWithButton() {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
   
    return (
      <div className="relative flex w-full max-w-[30rem]">
        <Input
          type="email"
          label="Email Address"
          value={email}
          onChange={onChange}
          color='white'
          className="pr-20"
          containerProps={{
            className: "min-w-0 font-fairplay italic",
          }}
        />
        <Button
          size="sm"
          color={email ? "white" : "white"}
          disabled={!email}
          className="!absolute right-1 top-1 rounded font-fairplay font-semibold px-8"
        >
          SIGN UP
        </Button>
      </div>
    );
}

class Home extends Component {
    render() {

        const bg1 = dataBase.home.bgPic1;
        const bg2 = dataBase.home.bgPic2;
        const teams = dataBase.home.teams.map(function (teams) {
            let teamsImage = require("../Data/Assets/Picture/Team/" + teams.image);

            return (
                <div key={teams.name}>
                    <img src={teamsImage} alt={teams.name} />
                    <h6 className='italic font-libre text-white'>{teams.name}</h6>
                    <p className='font-libre text-abu'>{teams.position}</p>
                </div>
            );
        });

        return (
            <section id="home">
                <div style={{ backgroundImage: `url(${bg1})` }}>
                    <Header />
                    <div className='text-center py-40'>
                        <Fade bottom duration={2000}>
                            <h6 className='italic font-libre text-white'>Don't miss out!</h6>
                            <h1 className='font-fairplay text-white font-medium'>The Best Web Show Distributor</h1>

                            <button className='text-pink py-12 font-libre font-bold'>
                                <Link to="/Contact" style={{fontSize: "1.389vw;"}}>
                                    Learn More
                                </Link>
                            </button>
                        </Fade>
                    </div>
                </div>

                <div style={{ backgroundColor: "#272727" }}>
                    <Slide duration={2000}>
                        <div className='py-12 text-center'>
                            <h2 className='font-fairplay font-medium text-white'>Meet Our Team</h2>
                            <div className='flex flex-wrap-reverse gap-4 py-12 justify-center'>
                                {teams}
                            </div>
                        </div>
                    </Slide>
                </div>

                <div style={{ backgroundImage: `url(${bg2})` }}>
                    <Fade bottom duration={2000}>
                        <div className='py-12 text-center'>
                            <h2 className='font-fairplay text-white font-medium'>Testimonial</h2>
                            <h6 className='font-libre text-abu italic'>What they say about us</h6>
                            
                            <Carousel transition={{ duration: 2 }}>
                                { dataBase.home.testimonial.map((testimonial) => {
                                        let testiImage = require("../Data/Assets/Picture/Testimonial/" + testimonial.testiImage);
                                        
                                        return (
                                            <div key={testimonial.name - 1} className='container py-12 px-36 rounded-3xl'>
                                                <div className='flex justify-center'>
                                                    <img src={testiImage} alt={testimonial.name}/>
                                                </div>
                                                <div>
                                                    <h6 className='font-libre italic text-white py-5'>{testimonial.testi}</h6>
                                                    <p className='font-libre text-abu italic'>{testimonial.name} - {testimonial.job}</p>    
                                                </div>
                                            </div>
                                        );
                                    })
                                };
                            </Carousel>
                        </div>
                    </Fade>
                </div>

                <div style={{ backgroundColor: "#272727" }}>
                    <Slide left duration={1500}>
                        <div className='py-12'>
                            <div className='text-center'>
                                <h2 className='font-fairplay text-white font-medium'>Subscribe Now</h2>
                                <h6 className='italic font-libre text-abu'>Come along for the ride and be part of our exciting journey</h6>
                            </div>
                            <div className='flex justify-center py-12'>
                                <div className="relative flex w-full max-w-[30rem]">
                                    {<InputWithButton />}
                                </div>
                            </div>
                        </div>
                    </Slide>
                </div>

                <Footer />
            </section>
        );
    }
}

export default Home;