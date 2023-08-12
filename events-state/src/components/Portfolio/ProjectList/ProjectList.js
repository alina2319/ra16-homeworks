import {Component} from 'react';
import './project-list.css'
import PropTypes from 'prop-types';

export default class ProjectList extends Component {
	render() {
		const { projects } = this.props;
		const projectsColumns = [[], [], []];
		let column = 0;

		/* Так как для отображения проектов использована трех-колоночная структура,
		   то нужно поделить проекты между этими колонками.
		   Берем все проекты и добавляем по одному в каждую колонку по очереди.
		   (Для адаптивности и групировки изображений для приведения колонок к одной высоте
		   лучше использовать Masonry сетку) */
		for (let i = 0; i < projects.length; i += 1) {
			projectsColumns[column].push(projects[i]);
			if (column === 2) column = 0;
			else column += 1;
		}

		return (
			<div className={'portfolio__project-list project-list-portfolio'}>
				{/* Колонка 1 */}
				<div className={'project-list-portfolio__column'}>
					{projectsColumns[0].map((project) =>
						<div className={'project-list-portfolio__project'} key={Math.random()}>
							<a href={'/#'}><img src={`./portfolio/img/${project}`} alt={project} /></a>
						</div>
					)}
				</div>

				{/* Колонка 2 */}
				<div className={'project-list-portfolio__column'}>
					{projectsColumns[1].map((project) =>
						<div className={'project-list-portfolio__project'} key={Math.random()}>
							<a href={'/#'}><img src={`./portfolio/img/${project}`} alt={project} /></a>
						</div>
					)}
				</div>

				{/* Колонка 3 */}
				<div className={'project-list-portfolio__column'}>
					{projectsColumns[2].map((project) =>
						<div className={'project-list-portfolio__project'} key={Math.random()}>
							<a href={'/#'}><img src={`./portfolio/img/${project}`} alt={project} /></a>
						</div>
					)}
				</div>
			</div>
		)
	}
}

ProjectList.propTypes = {
	projects: PropTypes.arrayOf(PropTypes.string).isRequired,
}