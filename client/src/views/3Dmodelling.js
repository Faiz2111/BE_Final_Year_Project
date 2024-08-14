import {
    ContractData, LoadingContainer
  } from '@drizzle/react-components';
  import { DrizzleProvider } from '@drizzle/react-plugin';
  import React, { Component } from 'react';
  import { Spinner } from 'react-bootstrap';
  // reactstrap components
  import {
    Card, CardBody, Col, Row
  } from "reactstrap";
  import Land from "../artifacts/Land.json";
  import getWeb3 from "../getWeb3";
  import "../index.css";


  function imagedisplay(){
    return(
        <>
            <div class="box">
                <div>Sample text</div>
                <div>
                    <model-viewer src="IMPisland.glb" camera-controls></model-viewer>
                </div>

                <div>
                    <model-viewer src="hillmap.glb" camera-controls></model-viewer>
                </div>

                <div>
                    <model-viewer src="mountain.glb" camera-controls></model-viewer>
                </div>
            </div>
        </>
    )
  }

  export default imagedisplay;
