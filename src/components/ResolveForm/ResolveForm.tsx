import React, { useState, useContext } from "react";
import styled from "styled-components";
import { Center } from "../ui/Center";
import TextInput from "../ui/TextInput";
import { CardStyle, IStyle, H1Style, FormStyle, ButtonStyle } from "../Login";
import { useHistory, useParams } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import ToastMessage from "../ui/Toast";

const ResolveForm = () => {
  const { appService } = useContext(AuthContext);
  const { resolveId, defaultedAt } = useParams();
  const [text, setText] = useState("");
  const [success, setSuccess] = React.useState(false);
  const [errors, setErrors] = React.useState<string[]>([]);
  const [successToast, setSuccessToast] = React.useState<boolean>(false);

  const history = useHistory();
  const handleResolve = ({ target: { value } }: any) => {
    setText(value);
    if (value === "collect_payment") {
      history.push(`/collect-payment/${defaultedAt}`);
    }
  };

  const recordPayment = async (e: React.FormEvent) => {
    e.preventDefault();
    if (appService.admin) {
      const payment = await appService.recordPayment(
        {
          amount: 250,
          driverId: Number(resolveId),
          cashierId: appService.admin.id,
          paymentType: "DNW",
          resolvedAt: defaultedAt,
        },
        setErrors
      );

      if (payment) {
        setSuccess(true);
        setSuccessToast(true);
      }
    } else {
      throw new Error("Unauthorized");
    }
  };
  return (
    <Center>
      <CardStyle>
        <IStyle size='3em' color='teal' className='fas fa-sign-in-alt'></IStyle>
        <H1Style>Resolve Defalter</H1Style>
        {/* <Warning  /> */}
        <FormStyle>
          <Select onChange={handleResolve}>
            <option value='collect_payment'>Default type to resolve</option>
            <option value='collect_payment'> Collect Payment</option>
            <option value='no_work'>Didn't Work</option>
          </Select>

          {text === "no_work" && (
            <ButtonStyle
              variant='success'
              type='submit'
              onClick={recordPayment}
              disabled={successToast && true}
            >
              Resolve
            </ButtonStyle>
          )}
        </FormStyle>
        <ToastMessage
          show={successToast}
          onClose={() => setSuccessToast(false)}
          variant='success'
          title='Resolve Defaulters'
          message='Successfully resolved defaulter payment'
        />
      </CardStyle>
    </Center>
  );
};

export default ResolveForm;

const Select = styled.select`
  width: 100%;
  padding: 1em 0.5em;
  margin: 3em 0;
  border: 1px solid lightgrey;
  outline: none;
  border-radius: 4px;
`;
