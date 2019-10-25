<template>
	<div class="climbCard--new" @click="$emit('addClimb')">
		<div class="climbCard__addClimb">
			<div class="climbCard__icon--new">
				<i class="fas fa-plus-circle"></i>
			</div>
			<div class="climbCard__label">Add a climb</div>
		</div>
	</div>
</template>
