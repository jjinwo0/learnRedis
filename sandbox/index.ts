import 'dotenv/config';
import { client } from '../src/services/redis';

const run = async () => {
	await client.hSet('car', {
		color: 'red',
		year: 1950,
		engine: { cylinders: 8 },
		owner: null || '',
		service: undefined || ''
	});

	const car = await client.hGetAll('cars');

	// 만약 리턴할 값을 찾지 못했다면, null을 반환하는 것이 아닌 빈 배열({ })을 return하므로, 아래와 같은 조건문은 활용할 수 없음.
	// if(!car){
	//   console.log('Car not found, response with 404');
	//   return;
	// }

	if (Object.keys(car).length === 0) {
		console.log('Car not found, response with 404');
		return;
	}

	console.log(car);
};
run();
