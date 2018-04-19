import React from 'react';

import * as Typo from '../../../components/Typography';
import Divider from 'material-ui/Divider';
import Important from '../../../components/Important'


const Assembly = () => (

<div>

  <Typo.Subheading label="informer.assembly.assembly" />

  <Typo.List items={["day_before_event", "event_day"]} baseLabel="informer.assembly.options" />

  <Important label="informer.assembly.go_to_info" />

  <div style={{marginBottom: 50},{marginTop: 50}} >

      <Typo.Subheading label="informer.assembly.delivery" />

    <img src="https://d3vv6lp55qjaqc.cloudfront.net/items/0G421Y052d3o3A3S1A1p/before_day%20(2).png" />

  </div>

  <Important label="informer.assembly.tape" />

  <Divider></Divider>
vsvdsvd

  <Typo.Subheading label="informer.assembly.disassembly" />

  <Typo.List items={["event_day"]} baseLabel="informer.assembly" />

  {/* <Typo.Subheading label="informer.assembly." /> */}

</div>

);

export default Assembly;
