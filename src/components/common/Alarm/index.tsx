import { AlarmStateType } from "@types/common/alarm.type";
import { BodyStrong, BodyLarge } from "@styles/text.style.ts";
import Attention from "@assets/images/Attention.svg";
import Success from "@assets/images/Success.svg";
import Coution from "@assets/images/Coution.svg";
import Critical from "@assets/images/Critical.svg";
import * as S from "./style";

interface AlarmPropsType {
  state: AlarmStateType;
  bodyText: string;
}

const srcFor = {
  Attention,
  Success,
  Coution,
  Critical,
};

const Alarm = ({ state, bodyText }: AlarmPropsType) => (
  <S.Alarm state={state}>
    <S.Icon src={srcFor[state]} />
    <BodyStrong>{state}</BodyStrong>
    {bodyText && <BodyLarge>{bodyText}</BodyLarge>}
  </S.Alarm>
);

export default Alarm;
