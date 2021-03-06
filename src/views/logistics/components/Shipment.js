import React from 'react';
import {translate} from 'admin-on-rest';
import Divider from 'material-ui/Divider';
import { Link } from 'react-router-dom';



import * as Typo from '../../../components/Typography';
import Important from '../../../components/Important'

const Shipment = ({translate}) => (

<div>

    <Typo.Subheading label="informer.shipment.address" />

    <Important label="informer.shipment.address" >

      <div>
        <p>EXPO Kraków</p>
        <p>{translate("informer.shipment.describe")}</p>
        <p>Galicyjska 9</p>
        <p>31-586 Kraków{translate('informer.shipment.country')}</p>
      </div>

    </Important>

    <Typo.Subheading label="informer.shipment.contact_number" />



    <Important label="informer.shipment.deliver" />

    <Divider></Divider>

    <div style={{marginTop: 50}}>

      <Typo.Subheading label="informer.shipment.fill_in_form" />
      <Typo.Subheading label={<a href="https://docs.google.com/forms/d/e/1FAIpQLSe3iOY_zHsqu_WQGd-wt6PKXOdel9xmVcbkpjo8qldAI6iMOg/viewform" target="_blank">{translate('informer.shipment.form')}</a>} />

    </div>

    <Divider></Divider>

    <div style={{marginTop: 50}}>

      <Typo.Subheading label="informer.shipment.deliver_hours" />

      <Typo.List items={["day_before_event", "event_day"]} baseLabel="informer.shipment.date" />

    </div>



   {/* <HeadingMargin>
      {translate("informer.shipment.sped")}
   </HeadingMargin> */}

        {/* <Subheading>
          {translate("informer.shipment.contact_person")}
        </Subheading> */}

        {/* <Border>
          Marcin Frontczak
          <p>e-mail: <a href="mailto:marcin@transmeble.com.pl">marcin@transmeble.com.pl</a></p>
          <p>tel.: + 48 61 865 68 07</p>
          <p>tel. kom.: +48 501 710 984</p>
          <p><a href="http://www.transmeble.com.pl/">www.transmeble.com.pl</a></p>
        </Border> */}


</div>

);

export default translate(Shipment);
