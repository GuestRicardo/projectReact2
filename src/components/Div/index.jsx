import { H1 } from '../H1/index';
import { Body } from '../Body/index';

export const Div = ({ children }) => {
  return (
    //com elementos irmãos
    <>
      <H1 />
      <Body />
    </>
  );
}
