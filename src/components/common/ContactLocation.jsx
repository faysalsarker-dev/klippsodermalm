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
                  <span className="font-medium">Address:</span> klippsodermalm Åsögatan.128, 11624 Stockholm, Sweden
                </span>
              </div>
              <div className="flex items-center gap-3">
                <FaPhoneAlt className="text-orange-500" size={26} />
                <span>
                 <a href="tel:086415057" className=" hover:underline">
                    <span className="font-medium">Phone:</span> 08-6415057 </a>
                  </span>
                
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className=" text-orange-500  p-1" size={26} />
                <span>
                  <span className="font-medium">Email:</span> klippsodermalm1@gmail.com
                </span>
              </div>
            </div>

            <div className="mt-6">
              <p className="font-medium mb-2 ">Follow Us</p>
              <div className="flex gap-4 text-orange-500 text-xl">
                <a href="#"><FaFacebookF /></a>
                <a href="#"><FaTwitter /></a>
                <a href="#"><FaLinkedinIn /></a>
                <a href="#"><FaInstagram /></a>
              </div>
            </div>
          </div>

          {/* Embedded Google Map */}
          <div className="rounded-lg overflow-hidden shadow-lg">
            <iframe
              title="map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3023.858189926092!2d-74.00601508459465!3d40.71277597933142!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDDCsDQyJzQ2LjAiTiA3NMKwMDAnMjYuMiJX!5e0!3m2!1sen!2sbd!4v1616161616161"
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
