import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';




export default function ContactLocation() {
  return (
    <section className=" py-16 px-4 background-secondary">
      <div className="max-w-6xl mx-auto">

        <div className="grid md:grid-cols-2  gap-8 items-center">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-semibold mb-3 ">Hör av dig – Vi finns här för dig!</h3>
            <p className=" mb-6">
        För mer information eller förfrågningar om våra produkter, projekt och priser är du välkommen att kontakta oss.
            </p>

            <div className="space-y-4 ">
              <div className="flex items-center gap-3">
                <FaMapMarkerAlt className="text-orange-500" size={26} />
                <span>
                  <span className="font-medium"></span>Klipp Södermalm 
Åsögatan 128 
11624 Stockholm, Sweden 
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" size={26} />
                <span>
                 <a href="tel:086415057" className=" hover:underline">
                    <span className="font-medium"></span> 08-6415057   </a>,
                    <br />
                 <a href="tel:0739842237" className=" hover:underline">
                    <span className="font-medium"></span> 0739-842237 </a>
                  </span>
                
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className=" text-orange-500  p-1" size={26} />
                <span>
                  <span className="font-medium"></span> klippsodermalm1@gmail.com
                </span>
              </div>
            </div>

      
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="map"
  src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2036.1779290477377!2d18.0775879!3d59.3132858!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f77fcd11d453d%3A0xeabf111cb28a4da0!2sPiercing%20S%C3%B6dermalm!5e0!3m2!1ssv!2sbd!4v1744034781667!5m2!1ssv!2sbd"

              width="100%"
              height="320"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  );
}
