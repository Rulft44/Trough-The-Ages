// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('reloading skibidi gyats')

onEvent('recipes', event => {

	//Startup stuff
	console.log('sigma script has been loaded')

	// REMOVAL

	//remove age 1 stuff
	event.remove({output:'minecraft:blast_furnace' })
	event.remove({id:'farmersdelight:cutting/gravel'})
	//remove all ores from basic smelting
	//iron
	event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])
	//copper
	event.remove([{ type: 'minecraft:smelting', output: 'minecraft:copper_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:copper_ingot' }])
	//gold
	event.remove([{ type: 'minecraft:smelting', output: 'minecraft:gold_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:gold_ingot' }])
	//zinc
	event.remove([{ type: 'minecraft:smelting', output: 'create:zinc_ingot' }, { type: 'minecraft:blasting', output: 'create:zinc_ingot' }])


	// AGE 1 ADDS

	//add copper nuggies from gravel
	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [
		  { item: 'minecraft:gravel' }
		],
		tool: { tag: 'forge:tools/shovels' },
		result: [
		  { item: 'create:copper_nugget', count: 1 }
		]
	})
	event.custom({
		type: 'farmersdelight:cutting',
		ingredients: [
		  { item: 'minecraft:gravel' }
		],
		tool: { item:'notreepunching:flint_shovel' },
		result: [
		  { item: 'create:copper_nugget', count: 1 }
		]
	})
	//add blast furnace from copper
	event.shaped(
		Item.of('minecraft:blast_furnace', 1),
		[
		  'SSS',
		  'CFC',
		  'CCC'
		],
		{
		  F: 'minecraft:furnace',
		  C: 'minecraft:copper_ingot',
		  S: 'minecraft:smooth_stone'
		}
	)
	//add 7 iron nuggies from blasting to ALL ores
	event.blasting('7x minecraft:iron_nugget', 'minecraft:raw_iron')
	event.blasting('7x create:copper_nugget', 'minecraft:raw_copper')
	event.blasting('7x minecraft:gold_nugget', 'minecraft:raw_gold')
	event.blasting('7x create_dd:tin_nugget', 'create_dd:raw_tin')
	//add plant fiber from grass
	event.shapeless(
		Item.of('notreepunching:plant_fibre', 3), 
		[
		  'minecraft:grass',
		  'minecraft:grass', 	     
		  'minecraft:grass'
		]
	  )

})