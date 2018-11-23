import React from "react";
import ReachCarousel from './ReachCarousel.js';
import Weather2Carousel from './Weather2Carousel.js';
import FixtureCarousel from './FixtureCarousel.js';
import W2WCarousel from './W2WCarousel.js';
import BookCarousel from './BookCarousel.js';
import $ from 'jquery';


class Portfolio extends React.Component {

  constructor(props){
    super(props);
    this.state = {};
  }

  projectScrollingScript(numProjects){

    function applyBorder(element){

      element.css({textAlign: 'center', fontWeight: 540, fontSize: 18, marginLeft: '3%', marginRight: '3%', paddingBottom: '1%', color: '#2F4F4F', borderBottom: 'solid', borderBottomWidth: 3, borderColor: '#334d50'})

    }

    function disableBorder(element){

      element.removeAttr( 'style' );

      element.css({display: 'inline-block', width: '10%', textAlign: 'center', color: 'black', fontSize: 18, marginLeft: '3%', marginRight: '3%', paddingBottom: '1%'})


    }


    $(document).ready(function() {

      var activeSpan = $("div.selected");

      applyBorder(activeSpan)


  $("#cf7_controls-projects").on('click', 'div', function() {

    var newDiv = $(this).index();

    var currentIndex = $("div.selected").index();

    var currentSelectedDiv = $(`.${currentIndex}`)


    currentSelectedDiv.attr('id', 'hidden');

    // console.log("numProjects", numProjects);
    // $('#highlighted').each(function(){
    //
    //   $(this).attr('id', 'hidden');
    //
    // })

    var currentHighlightedDiv = $(`.${newDiv}`)

    $(`.${newDiv}`).attr('id', 'highlighted')

    $("#cf7_controls-projects div").removeClass("selected");
    $(this).addClass("selected");

    disableBorder($("#cf7_controls-projects div"));
    applyBorder($(this));


  });
});
  }

  render(){

    this.projectScrollingScript(5);

    return(

  <div className="projects">

    <h1 className="headline"> My portfolio</h1>

    <p id="cf7_controls-projects" style={{justifyContent: 'center'}}>
      <div className="selected project-header" style={{display: 'inline-block', width: '10%', textAlign: 'center', fontSize: 18, marginLeft: '3%', marginRight: '3%', paddingBottom: '1%'}}>Reach</div>
      <div className="project-header" style={{display: 'inline-block', width: '10%', textAlign: 'center', fontSize: 18, marginLeft: '3%', marginRight: '3%', paddingBottom: '1%'}}>Weather2...</div>
      <div className="project-header" style={{display: 'inline-block', width: '10%', fontSize: 18, marginLeft: '3%', marginRight: '3%', paddingBottom: '1%'}}>FixturePal</div>
      <div className="project-header" style={{display: 'inline-block', width: '10%', fontSize: 18, marginLeft: '3%', marginRight: '3%', paddingBottom: '1%'}}>Invent.story</div>
      <div className="project-header" style={{display: 'inline-block', width: '10%', fontSize: 18, marginLeft: '3%', marginRight: '3%', paddingBottom: '1%'}}>Weather2Wed</div>
    </p>

    <br></br>

    <div id='highlighted' className="project-info 0">

    <div className="project-paragraph">

      <table>
      <tr>
      <th><img style={{width:'3rem', height: '3rem', marginTop: '0.2rem', borderRadius: '15rem'}} src={require('../images/reach.png')}></img></th>
      <th>
      <h2 style={{marginLeft: '0.5rem'}}>
          Reach
      </h2>
      </th>
      </tr>
      </table>

      <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}>A modern social networking and dating app for millenials</h2>

      <table>
      <tr>
      <th>
        <img style={{width:'3.5rem', height: '3.5rem'}} src={require('../images/python.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/django.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/reactjs.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/jquery.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/psql.png')}></img>
      </th>
      </tr>
      </table>

      <h4 className="github"><a href="https://www.github.com/jah1603/Reach--">View on GitHub</a></h4>
      <p>I undertook this project with two friends based on our overarching vision of a networking app for hyperconnected social influencers. Together we implemented the code in Python (backend) and ReactJS (frontend), using a PSQL database for data persistence. Reach is a full-stack dating platform that measures users' social reach via web scraping, letting them find, match and interact with other users according to lifestyle preferences, location and age.<br/><br/>
      The app, which features full JSON web token authentication, a Django REST API, geolocation, swipeable cards and email activation, retrieves users' total social reach by scraping their follower count on three major social media platforms. All of this underpins a fresh and vibrant UI designed to appeal to millenials.</p>

    </div>

    <ReachCarousel>

    </ReachCarousel>


  </div>


    <br></br>

    <div id="hidden" className="project-info 1">

    <div className="project-paragraph">

      <table>
      <tr>
      <th><img style={{width:'5rem', height: '5rem', marginTop: '0.2rem'}} src={require('../images/weather2.gif')}></img></th>
      <th>
      <h2 style={{marginLeft: '0.5rem'}}>
          Weather2...
      </h2>
      </th>
      </tr>
      </table>

      <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}> A series of activity-related mobile weather apps, available on the Google Play store</h2>

      <table>
      <tr>
      <th>
        <img style={{width:'4rem', height: '3.5rem'}} src={require('../images/react_native.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/javascript.png')}></img>
      </th>
      <th>
        <img style={{width:'3.5', height: '3.5rem', marginLeft: '0.2rem'}} src={require('../images/android.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/genymotion.png')}></img>
      </th>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.5rem'}} src={require('../images/expo.png')}></img>
      </th>
      </tr>
      </table>

      <h4 className="github"><a href="https://play.google.com/store/apps/details?id=com.weather2.weather2walk">View on Google Play store</a></h4>
      <p>My motivation to do this project stemmed from a desire to hone my front-end development skills and create something visually stimulating and pleasing to the eye. Consisting of <span style={{fontStyle: 'italic'}}>Weather2Walk</span>, <span style={{fontStyle: 'italic'}}>Weather2Golf</span> and <span style={{fontStyle: 'italic'}}>Weather2Wed</span>, this mobile app series was built in ReactNative using emulators in Genymotion and Android Studio. <br/><br/>
      The app uses four APIs (DarkSky, Geograph, FourSquare and GoogleMaps) to fetch relevant data. Weather data is presented in the form of historical averages obtained through a number of sequential requests, and prospective venues for the searched location are presented on an interactive map. Weather2Walk benefits from a fuzzy search, meaning highly specific place names (waterfalls, forests or small hills) can be searched, while Weather2Golf offers hourly weather snapshots, helping golfers to make an informed decision about their tee-off time.<br/><br/>
      </p>

    </div>

  <Weather2Carousel>

  </Weather2Carousel>


  </div>


  <br></br>

  <div id="hidden" className="project-info 2">

  <div className="project-paragraph">

    <table>
    <tr>
    <th><img style={{width:'5rem', height: '5rem', marginTop: '0.2rem'}} src={require('../images/football-boots.png')}></img></th>
    <th>
    <h2 style={{marginLeft: '0.5rem'}}>
        FixturePal
    </h2>
    </th>
    </tr>
    </table>

    <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}> A sports match schedule generator and results tracker</h2>

    <table>
    <tr>
    <th>
      <img style={{width:'4rem', height: '3.5rem'}} src={require('../images/java.png')}></img>
    </th>
    <th>
      <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/psql.png')}></img>
    </th>
    </tr>
    </table>

    <h4 className="github"><a href="https://github.com/jah1603/FixturePal/blob/master/src/main/java/models/League.java">View on GitHub</a></h4>
    <p>This project dates back to my time at CodeClan, where I created a custom brief along with two colleagues. The end product - FixturePal - can generate the entire match schedule for a sports season (including alternating home and away games) using a round-robin algorithm. <br/><br/>
    As well as being able to create a league of teams and enter match scores, users can keep track of team performance in a given league courtesy of a league table filtered by points, goal difference and goals scored. An option for logging match events in short match reports also exists, thereby enabling users to record information on goalscorers and disciplinary records.
  </p>

  </div>

<FixtureCarousel>

</FixtureCarousel>


</div>


<div id="hidden" className="project-info 3">

<div className="project-paragraph">

  <table>
  <tr>
  <th><img style={{width:'5rem', height: '5rem', marginTop: '0,5rem'}} src={require('../images/books.png')}></img></th>
  <th>
  <h2 style={{marginLeft: '0.5rem'}}>
      Invent.story
  </h2>
  </th>
  </tr>
  </table>

  <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}>A lightweight inventory and profit tracker built with independent booksellers in mind</h2>

  <table>
  <tr>
  <th>
    <img style={{width:'2.5rem', height: '2.5rem'}} src={require('../images/ruby.png')}></img>
  </th>
  <th>
    <img style={{width:'4rem', height: '4rem', marginLeft: '1rem'}} src={require('../images/sinatra.png')}></img>
  </th>
  <th>
    <img style={{width:'2.5rem', height: '2.5rem', marginLeft: '0.2rem'}} src={require('../images/psql.png')}></img>
  </th>
  </tr>
  </table>

  <h4 className="github"><a href="http://invent-story.herokuapp.com">View on Heroku</a></h4>
  <p>An application which enables a bookseller to monitor stock levels, profit, publishers and genres. A PSQL database was used for data persistence, allowing the user to create, edit and delete books and publishers as desired. It is also possible to browse stock by genre and record stock sales/replenishment at the click of a button.<br/><br/>
</p>

</div>

<BookCarousel>

</BookCarousel>


</div>


    <div id="hidden" className="project-info 4">

    <div className="project-paragraph">

      <table>
      <tr>
      <th><img style={{width:'5rem', height: '5rem', marginTop: '0,5rem'}} src={require('../images/weather2wed.png')}></img></th>
      <th>
      <h2 style={{marginLeft: '0.5rem'}}>
          Weather2Wed
      </h2>
      </th>
      </tr>
      </table>

      <h2 style={{fontWeight: 'normal', fontStyle: 'italic'}}>A fun wedding day planning tool, vanilla JavaScript</h2>

      <table>
      <tr>
      <th>
        <img style={{width:'2.5rem', height: '2.5rem'}} src={require('../images/javascript.png')}></img>
      </th>
      <th>
        <img style={{width:'4rem', height: '4rem', marginLeft: '1rem'}} src={require('../images/node.png')}></img>
      </th>
      </tr>
      </table>

      <h4 className="github"><a href="http://weather2wed.herokuapp.com">View on Heroku</a></h4>
      <p>Another custom-made brief, this was a CodeClan project which aimed to provide information in a novel and engaging way. Weather2Wed, which was built in line with the publish-subscribe pattern, presents historical weather summaries for locations throughout Britain and Ireland. Use of the Geograph photography API means that the app benefits from what is effectively a fuzzy search, as any location can be entered as a search term, be it a town, venue, landmark or even a waterfall. <br/><br/>
      Weather data was sourced from DarkSky using the coordinates obtained from the Geograph API. These same coordinates were also fed into the FourSquare API so as to suggest prospective hotels in and around the searched wedding location. Astronomical equations were also used to predict whether the user's chosen wedding date would fall on a full moon.
    </p>

    </div>

  <W2WCarousel>

  </W2WCarousel>


  </div>
  </div>
)
}
}


export default Portfolio;
