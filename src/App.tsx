import './App.css';
import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import { useState } from 'react';
import Cat from './data/cat';
import Dog from './data/dog';
import Card from './components/card';
import { catsData } from './data/cat-data';
import { dogsData } from './data/dog-data';

function App(): JSX.Element {

	// JavaScript/TypeScript code can be inserted here!

	const [cats, setCats] = useState<Array<Cat>>(catsData);
	const [dogs, setDogs] = useState<Array<Dog>>(dogsData);

	const catCount = cats.length;
	const dogCount = dogs.length;

	return (
		<>
			<Navbar />
			<Header catCount={catCount} dogCount={dogCount} />

			<main>
			<div className='cards__wrapper'>{dogs.map((dog, index) => (
					<Card
						key={index}
						name={dog.name}
						species={dog.species}
						favFoods={dog.favFoods}
						birthYear={dog.birthYear}
						animalIndex={index}
					/>
				))}</div>
				<div className='cards__wrapper'>{cats.map((cat, index) => (
					<Card
						key={index}
						name={cat.name}
						species={cat.species}
						favFoods={cat.favFoods}
						birthYear={cat.birthYear}
						animalIndex={index}
					/>
				))}</div>				
			</main>

			<Footer />
		</>
	);
}

export default App;
