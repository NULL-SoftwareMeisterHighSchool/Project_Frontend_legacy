import React, { useState } from "react";
import AppLayout from "@layouts/AppLayout";
import Dummy from "@fixtures/alarm.json";
import * as S from "./style";
import Notify from "@components/pages/Alarm/Notify";

const Alarm = () => {
	return (
		<AppLayout title="알림" path="User > 알림">
			<S.AlarmContainer>
				<S.Content>
					{
						Dummy.post.map(
							post => (
								<Notify id={post.id} title={post.title} date={post.date} time={post.time} to='' />
							)
						)
					} 
				</S.Content>
			</S.AlarmContainer>
		</AppLayout>
	);
};

export default Alarm;
