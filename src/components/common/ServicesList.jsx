import ServicesCard from "./ServicesCard";

const services = [
  {
    id: "ear-piercing",
    name: "Ear Piercing",
    description: "Precision ear lobe and cartilage piercing",
    price: 30,
  },
  {
    id: "nose-piercing",
    name: "Nose Piercing",
    description: "Safe and sterile nostril piercing",
    price: 25,
  },
  {
    id: "belly-piercing",
    name: "Belly Button Piercing",
    description: "Trendy navel piercing with aftercare",
    price: 40,
  },
  {
    id: "eyebrow-piercing",
    name: "Eyebrow Piercing",
    description: "Stylish brow piercing with precision",
    price: 35,
  },
];


const ServicesList = ({url}) => {

    
    return (
        <div>
                  <div className="space-y-6">
            {services.map((service) => (
            <ServicesCard key={service.id} service={service}/>
            ))}
          </div>
        </div>
    );
};

export default ServicesList;