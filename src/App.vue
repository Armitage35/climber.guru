<template>
	<div id="app">
		<Button type="primary" content="primary"></Button>
		<Button type="secondary" content="secondary"></Button>
	</div>
</template>

<script>
import './Master.scss';

import Button from './components/Button/Button';

export default {
	name: 'app',
	components: { Button }
};
</script>
