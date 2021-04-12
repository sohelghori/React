import Typed from 'react-typed';

function About() {
    return (
      <div className="inner-page-wrapper">
          <div>
            <h1>About Us</h1>
            <h2 class="typed">
                <Typed
                    strings={[
                        'Search for products',
                        'Search for categories',
                        'Search for brands']}
                        typeSpeed={40}
                        backSpeed={50}
                        attr="placeholder"
                        loop >
                        <input type="text"/>
                </Typed>
              </h2>
        </div>
      </div>
    );
  }
  
  export default About;