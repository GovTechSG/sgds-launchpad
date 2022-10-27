import {Button, Form, StepMetadata, Stepper, useStep, UseStepMethods} from '@govtechsg/sgds-react'
import {createElement, FormEvent} from "react";
import {BRAND_NAME} from "../lib/config";
import {Check2Circle} from "react-bootstrap-icons";

const resetForm = (event: any) => {

}

const submit = (event: any) => {

}

const onSubmit = (event: FormEvent) => {
  event.preventDefault();
  console.log('submission prevented');
};

const ComponentOne = () => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Text className="text-muted">
          We&apos;ll never share your email with anyone else.
        </Form.Text>
        <Form.Control type="email" placeholder="Enter email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Text className="text-muted">
          A One-Time Password has been sent to your email.
        </Form.Text>
        <Form.Control type="password" placeholder="Password"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Contact me"/>
      </Form.Group>
    </Form>
  )
}

const ComponentTwo = () => {
  return (
    <Form onSubmit={onSubmit}>
      <Form.Group className="mb-3" controlId="formBasicAddress">
        <Form.Label>Street Name</Form.Label>
        <Form.Text className="text-muted">
          We&apos;ll use your address only to send you support packages and important information.
        </Form.Text>
        <Form.Control type="address" placeholder="Enter address"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Send my package to this address"/>
      </Form.Group>
    </Form>
  )
}

const ComponentThree = () => {
  return (
    <>
      <Check2Circle/>
      <h1>
        All done!
      </h1>
      <p>
        Based on your information, you are eligible for {BRAND_NAME}!
      </p>
    </>
  )
}

const ExampleStepper = () => {
  const metadata: StepMetadata[] = [
    {
      component: ComponentOne,
      title: 'Personal Details',
      stepHeader: 'Personal Details',
    },
    {
      component: ComponentTwo,
      title: 'Address and Contact Information',
      stepHeader: 'Address and Contact Information',
      onNextStep: async (onDone) => {
        // Add your side effects here e.g. fetch API
        onDone();
      },
      onPreviousStep: async (onDone) => {
        // Add your side effects here e.g. clear states
        onDone();
      },
      onArrived: async () => {
        // Add your side effects here
        console.log('onArrived2')
      }
    },
    {
      component: ComponentThree,
      title: 'Create project',
      stepHeader: 'Review',
      onPreviousStep: async (onDone) => {
        onDone();
      },
      onArrived: async () => console.log('onArrived3'),
    },
  ];

  const stepMethods: UseStepMethods = useStep(metadata)
  const {
    state: stepState,
    stepsMetadata,
    getTitle,
    setStep,
    nextStep,
    prevStep,
    getNextButtonTitle,
    getBackButtonTitle,
    getComponent,
    reset,
  } = stepMethods;

  return (
    <>
      <Stepper methods={stepMethods}/>
      <Form className="p-3">
        <div>{createElement(getComponent())}</div>
        <div className="d-flex justify-content-between">
          <div>
            {getBackButtonTitle() && (
              <Button onClick={prevStep} variant="danger" className="me-3">
                {getBackButtonTitle()}
              </Button>
            )}
            <Button onClick={resetForm} variant="secondary">
              Reset
            </Button>
          </div>
          <div>
            <Button
              onClick={stepsMetadata.isLastStep(stepState.currentStep) ? submit : nextStep}> {getNextButtonTitle()}</Button>
            <Button
              className="ms-3"
              onClick={() => setStep(3)}
              variant="warning"
            >
              Jump to last page
            </Button>
          </div>
        </div>
      </Form>
    </>
  )
}

export default ExampleStepper;
