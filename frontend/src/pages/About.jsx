import React from 'react';
import './About.css'

const About = () => {
  return (
    <div className='about-container'>
      <div className='about'>
        <h2>About Us</h2>
        <p>Welcome to our website!</p>
      </div>
        <div className='about-video'>
          <video width="900" height="400" controls>
              <source src="/videos/Zepto.mp4" type="video/mp4" />
              Your browser does not support the video tag.
          </video>
        </div>
        <section className="about-history">
        <h2>What is a Shopee.com</h2>
        <p>
        Shopee is India’s largest online food and grocery store. With over 18,000 products and over a 1000 brands in our catalogue you will find everything you are looking for. Right from fresh Fruits and Vegetables, Rice and Dals, Spices and Seasonings to Packaged products, Beverages, Personal care products, Meats – we have it all.
        Choose from a wide range of options in every category, exclusively handpicked to help you find the best quality available at the lowest prices. Select a time slot for delivery and your order will be delivered right to your doorstep, anywhere in Bangalore, Hyderabad, Mumbai, Pune, Chennai, Delhi, Noida, Mysore, Coimbatore, Vijayawada-Guntur, Kolkata, Ahmedabad-Gandhinagar, Lucknow-Kanpur, Gurgaon, Vadodara, Visakhapatnam, Surat, Nagpur, Patna, Indore and Chandigarh Tricity You can pay online using your debit / credit card or by cash / sodexo on delivery.
        We guarantee on time delivery, and the best quality!
        </p>
        
      </section>
      
      <section className="about-today">
        <h2>Why shop with us ?</h2>
        <h3>Our Range</h3>
        <p>
          Our commitment to quality, freshness, and customer experience remains the same as it was decades ago. Visit any of our locations to experience the difference.
        </p>
        <h3>Prices </h3>
        <p>
        Enjoy the Best Deals, Lowest Prices & Biggest Savings everyday #BachateRaho. Get everything under MRP, at market’s best prices & hottest offers on all the leading brands like Aashirwaad, Surf Excel, Red Label, Amul, Kissan, Britannia, Nestle, Cadbury, Haldiram, Dove, Sunsilk, Nivea and Vaseline and many many more.  
        </p>
        <h3>Own Brands</h3>
        <p>
        You can also shop for the best food and non-food products from our own TATA brands:<br/>
        Fabsta - our home-grown food brand.<br/>
        Klia- Our home-grown home care brand.<br/>
        Skye- Our home-grown personal care brand.<br/>
        </p>
        <h3>Our Delivery Slots</h3>
        <p>
        We know you lead a busy life. We deliver orders in different slots, starting at 9am in the morning and going upto 10pm in the night. The hard-working YOU deserves a harder working grocer!
        </p>
        <h3>Our Return Policy</h3>
        <p>
        This is the best part. We have a NO questions asked return policy. Just reach out to us at the time of the order delivery or even upto 48 hours later and we will take the items back - No questions asked.
        </p>
        <h3>Our Farmers</h3>
        <p>
        We know how much you love fresh food. We source over 80% of the vegetables and over 65% of the fruits directly from over 800 farmers across the country. And we bring it from farms to our stores in less than 24 hours and from stores to your doorstep within few hours.
        Our farmers are our partners. They share the same principles as we do, which is providing the best quality seasonal produce for our customers. AT STAR, we put quality first and believe in offering the best of fresh produce loved by all our customers.
        We believe in supporting the nation, by focusing on locally grown products that cater to our customers’ demands. Our farmers are a huge part of our STAR family and we believe in giving them a tremendous share of respect by showing their names and faces. It also helps us create a connection between our farmers & customers. And with an efficient supply chain, we bring their love, freshness & flavour to your plates from various parts of the country.
        </p>
        <img src="https://i.pinimg.com/474x/af/18/6c/af186ca7186d86d00327b50e8c155840.jpg" alt="The Fresh Market History" className="about-image" />
        
      </section>

    </div>
  );
};

export default About;
