import React from 'react';
import './TabsContainer.scss';
import renderIf from 'render-if';
import {FormNames} from "../constants";
import AngularForm from "../component/AngularForm";
import ReactForm from "../component/ReactForm";
import VueForm from "../component/VueForm";
import CustomSVGForm from "../component/CustomSVGForm";

const SettingFormContainer = ({formName, uploaded}) => (
  <div>
    {renderIf(formName === FormNames.AngularForm)(
      <AngularForm/>
    )}
    {renderIf(formName === FormNames.ReactForm)(
      <ReactForm/>
    )}
    {renderIf(formName === FormNames.VueForm)(
      <VueForm/>
    )}
    {renderIf(formName === FormNames.CustomSVGForm)(
      <CustomSVGForm disabled={!uploaded}/>
    )}
  </div>
);
export default SettingFormContainer;
