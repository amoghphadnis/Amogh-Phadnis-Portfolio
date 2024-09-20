import FormfacadeEmbed from "@formfacade/embed-react";
import React from 'react';

const Contact = () => {

  return (
    <FormfacadeEmbed

      formFacadeURL="https://formfacade.com/include/105236667848361379658/form/1FAIpQLSf7PF7swnz-qMmXr0TrAVtySV4tYyWSmNnDvV0jvHXNx0y5AA/classic.js/?div=ff-compose"

      onSubmitForm={() => console.log('Form submitted')}

    />
  );
};

export default Contact;
