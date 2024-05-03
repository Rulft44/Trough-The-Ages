// priority: 0

settings.logAddedRecipes = true
settings.logRemovedRecipes = true
settings.logSkippedRecipes = false
settings.logErroringRecipes = true

console.info('reloading skibidi gyats')

onEvent('recipes', event => {

	//Startup stuff
	console.log('sigma script has been loaded')

	// ORE ADDS--------------------------------------------
	//add 7 nuggies from blasting to ALL ores
	event.blasting('7x minecraft:iron_nugget', 'minecraft:raw_iron')
	event.blasting('7x create:copper_nugget', 'minecraft:raw_copper')
	event.blasting('7x minecraft:gold_nugget', 'minecraft:raw_gold')
	event.blasting('7x create_dd:tin_nugget', 'create_dd:raw_tin')
	event.blasting

	// REMOVAL---------------------------------------------
	//remove tree fertilizer due to crash :(
	event.remove({output:'create:tree_fertilizer'})

	//remove age 1 stuff
	event.remove({output:'minecraft:blast_furnace' })
	event.remove({id:'farmersdelight:cutting/gravel'})

	//remove all ores from basic smelting
	event.remove([{ type: 'minecraft:smelting', output: 'minecraft:iron_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:iron_ingot' }])
	event.remove([{ type: 'minecraft:smelting', output: 'minecraft:copper_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:copper_ingot' }])
	event.remove([{ type: 'minecraft:smelting', output: 'minecraft:gold_ingot' }, { type: 'minecraft:blasting', output: 'minecraft:gold_ingot' }])
	event.remove([{ type: 'minecraft:smelting', output: 'create:zinc_ingot' }, { type: 'minecraft:blasting', output: 'create:zinc_ingot' }])
	event.remove([{ type: 'minecraft:smelting', output: 'immersiveengineering:ingot_aluminum'}, { type: 'minecraft:blasting', output: 'immersiveengineering:ingot_aluminum'}])
	event.remove([{ type: 'minecraft:smelting', output: 'immersiveengineering:ingot_lead'}, { type: 'minecraft:blasting', output: 'immersiveengineering:ingot_lead'}])
	event.remove([{ type: 'minecraft:smelting', output: 'immersiveengineering:ingot_silver'}, { type: 'minecraft:blasting', output: 'immersiveengineering:ingot_silver'}])
	event.remove([{ type: 'minecraft:smelting', output: 'immersiveengineering:ingot_nickel'}, { type: 'minecraft:blasting', output: 'immersiveengineering:ingot_nickel'}])
	event.remove([{ type: 'minecraft:smelting', output: 'immersiveengineering:ingot_uranium'}, { type: 'minecraft:blasting', output: 'immersiveengineering:ingot_uranium'}])

	//remove all diamond tools from normal crafting and add more complicated crafting ones
	event.remove({id:'minecraft:diamond_pickaxe'})
	event.remove({id:'minecraft:diamond_axe'})
	event.remove({id:'minecraft:diamond_shovel'})
	event.remove({id:'minecraft:diamond_hoe'})
	//-.-
	event.shaped(
		Item.of('minecraft:diamond_pickaxe', 1),
		[
			'DDD',
			'FSF',
			' S '
		],
		{
		  D:'minecraft:diamond',
		  F:'cold_sweat:fur',
		  S:'minecraft:stick'
		}
	)
	event.shaped(
		Item.of('minecraft:diamond_axe', 1),
		[
			'DDF',
			'DSF',
			' S '
		],
		{
		  D:'minecraft:diamond',
		  F:'cold_sweat:fur',
		  S:'minecraft:stick'
		}
	)
	event.shaped(
		Item.of('minecraft:diamond_shovel', 1),
		[
			'FDF',
			' S ',
			' S '
		],
		{
		  D:'minecraft:diamond',
		  F:'cold_sweat:fur',
		  S:'minecraft:stick'
		}
	)
	event.shaped(
		Item.of('minecraft:diamond_hoe', 1),
		[
			'DDF',
			'FS ',
			' S '
		],
		{
		  D:'minecraft:diamond',
		  F:'cold_sweat:fur',
		  S:'minecraft:stick'
		}
	)

	//netherite-handling
	//remove diamond armor and netherite recipes
	event.remove({output:'minecraft:diamond_helmet'})
	event.remove({output:'minecraft:diamond_chestplate'})
	event.remove({output:'minecraft:diamond_leggings'})
	event.remove({output:'minecraft:diamond_boots'})
	event.remove({output:'minecraft:netherite_helmet'})
	event.remove({output:'minecraft:netherite_chestplate'})
	event.remove({output:'minecraft:netherite_leggings'})
	event.remove({output:'minecraft:netherite_boots'})
	event.remove({output:'minecraft:netherite_ingot'})
	event.remove({output:'minecraft:netherite_pickaxe'})
	event.remove({output:'minecraft:netherite_axe'})
	event.remove({output:'minecraft:netherite_shovel'})
	event.remove({output:'minecraft:netheite_hoe'})
	//add netherite alloy mixing
	event.recipes.create.mixing('2x minecraft:netherite_ingot',[Fluid.lava(1000),'8x vintageimprovements:nethersteel_sheet','4x minecraft:netherite_scrap','2x create_dd:blaze_gold']).superheated()
	//set new netherite stuff recipes
	event.recipes.create.compacting('minecraft:netherite_helmet',[Fluid.lava(1000),'minecraft:netherite_ingot','alloyed:steel_helmet','4x create:golden_sheet']).superheated()
	event.recipes.create.compacting('minecraft:netherite_chestplate',[Fluid.lava(1000),'minecraft:netherite_ingot','alloyed:steel_chestplate','4x create:golden_sheet']).superheated()
	event.recipes.create.compacting('minecraft:netherite_leggings',[Fluid.lava(1000),'minecraft:netherite_ingot','alloyed:steel_leggings','4x create:golden_sheet']).superheated()
	event.recipes.create.compacting('minecraft:netherite_boots',[Fluid.lava(1000),'minecraft:netherite_ingot','alloyed:steel_boots','4x create:golden_sheet']).superheated()
	event.recipes.create.compacting('minecraft:netherite_pickaxe',[Fluid.lava(1000),'minecraft:netherite_ingot','minecraft:diamond_pickaxe','2x minecraft:netherite_scrap']).superheated()
	event.recipes.create.compacting('minecraft:netherite_axe',[Fluid.lava(1000),'minecraft:netherite_ingot','minecraft:diamond_axe','2x minecraft:netherite_scrap']).superheated()
	event.recipes.create.compacting('minecraft:netherite_shovel',[Fluid.lava(1000),'minecraft:netherite_ingot','minecraft:diamond_shovel','2x minecraft:netherite_scrap']).superheated()
	event.recipes.create.compacting('minecraft:netherite_hoe',[Fluid.lava(1000),'minecraft:netherite_ingot','minecraft:diamond_hoe','2x minecraft:netherite_scrap']).superheated()
	// AGE 1 ADDS------------------------------------------
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
	//add plant fiber from grass
	event.shapeless('2x notreepunching:plant_fiber', [ 
  		'minecraft:grass',
  		'minecraft:grass'
	])
	//remove all useless shit from notreepunching
	event.remove({output:'notreepunching:ceramic_bucket'})
	event.remove({output:'notreepunching:clay_tool'})
	event.remove({output:'notreepunching:flint_knife'})
	event.remove({output:'notreepunching:iron_knife'})
	event.remove({output:'notreepunching:gold_knife'})
	event.remove({output:'notreepunching:diamond_knife'})
	event.remove({output:'notreepunching:netherite_knife'})
	event.remove({output:'notreepunching:iron_mattock'})
	event.remove({output:'notreepunching:gold_mattock'})
	event.remove({output:'notreepunching:diamond_mattock'})
	event.remove({output:'notreepunching:netherite_mattock'})
	event.remove({mod:'notreepunching',output:'#notreepunching:knives'})
	event.remove({mod:'pizzacraft',output:'#notreepunching:knives'})
	//add normal clay back
	event.smelting('minecraft:brick','minecraft:clay_ball')

	//AGE 2 ADDS----------------------------------------
	//add cinder flour recipe
	event.shapeless('1x create:cinder_flour', [
		'create:wheat_flour',
		'create:scorchia'
	])
	//change empty blaze burner recipe
	event.remove({output:'create:empty_blaze_burner'})
	event.shaped(
		Item.of('create:empty_blaze_burner'),
		[
			'ZBZ',
			'BRB',
			'ZBZ'
		],
		{
			Z:'#forge:plates/zinc',
			B:'minecraft:iron_bars',
			R:'minecraft:netherrack'
		}
	)
	//add blaze burner recipe
	event.shaped(
		Item.of('create:blaze_burner'),
		[
			'GDG',
			'LBL',
			'GEG'
		],
		{
			G:'createaddition:gold_rod',
			D:'minecraft:diamond',
			L:'minecraft:lava_bucket',
			B:'minecraft:blast_furnace',
			E:'create:empty_blaze_burner'
		}
	)
	//add Saddle recipe
	event.shaped(
		Item.of('minecraft:saddle'),
		[
			'LLL',
			'A A'
		],
		{
			L:'minecraft:leather',
			A:'create:andesite_alloy'
		}
	)
	//add soul soil recipe
	event.recipes.create.sandpaper_polishing(Item.of('minecraft:soul_soil').withChance(0.35), 'minecraft:coal_block')
	//make buckets out of steel
	event.remove({output:'minecraft:bucket'})
	event.shaped(
		Item.of('minecraft:bucket'),
		[
			'S S',
			' S '
		],
		{
			S:'#forge:ingots/steel'
		}
	)
	//make unheated lava recipe
	event.recipes.create.mixing(Fluid.lava(25),['#bookshelf:stones','minecraft:gunpowder'])

	//AGE 3 ADDS-----------------------------------------
	//remove alloyed & create_dd steel recipe
	event.remove({mod:'alloyed',output:'alloyed:steel_ingot'})
	event.remove({mod:'create_dd',output:'create_dd:steel_ingot'})
	//add blaze powder recipe
	event.recipes.create.mixing('9x minecraft:blaze_powder',[Fluid.lava(500),'immersiveengineering:coke']).heated()
	//change blast brick recipe
	event.remove({output:'immersiveengineering:blastbrick'})
	event.recipes.create.deploying('3x immersiveengineering:blastbrick',['minecraft:magma_block','minecraft:blaze_powder'])
	//change rose quartz recipe
	event.shapeless('create:rose_quartz',
	[
		'vintageimprovements:vanadium_nugget',
		'minecraft:quartz',
		'7x minecraft:redstone'

	])
	//add basalt recipe
	event.recipes.create.filling('minecraft:basalt',[Fluid.water(1000),'minecraft:magma_block'])
	//remove reinforcement plating
	event.remove({output:'create_dd:reinforcement_plating'})
	//add nametag recipe
	event.shaped(
		Item.of('minecraft:name_tag'),
		[
			'II',
			'BB',
			'BB'
		],
		{
			I:'minecraft:iron_ingot',
			B:'create:brass_sheet'
		}
	)
	//make vanadium rarely be mill-able from basalt
	event.recipes.create.milling(['create_things_and_misc:crushed_magma', Item.of('vintageimprovements:vanadium_nugget').withChance(0.05)], 'minecraft:basalt')
	//change eureka recipes
	event.remove({mod:'vs_eureka'})
	//helms
	event.shaped(
		Item.of('vs_eureka:spruce_ship_helm'),
		[
			'EAS',
			'CWC',
			'SLE'
		],
		{
			E:'#forge:plates/electrum',
			A:'create:andesite_casing',
			S:'#forge:plates/aluminum',
			C:'create:large_cogwheel',
			W:'vs_clockwork:wanderlite_matrix',
			L:'minecraft:spruce_log'

		}
	)
	event.shaped(
		Item.of('vs_eureka:oak_ship_helm'),
		[
			'EAS',
			'CWC',
			'SLE'
		],
		{
			E:'#forge:plates/electrum',
			A:'create:andesite_casing',
			S:'#forge:plates/aluminum',
			C:'create:large_cogwheel',
			W:'vs_clockwork:wanderlite_matrix',
			L:'minecraft:oak_log'

		}
	)
	event.shaped(
		Item.of('vs_eureka:birch_ship_helm'),
		[
			'EAS',
			'CWC',
			'SLE'
		],
		{
			E:'#forge:plates/electrum',
			A:'create:andesite_casing',
			S:'#forge:plates/aluminum',
			C:'create:large_cogwheel',
			W:'vs_clockwork:wanderlite_matrix',
			L:'minecraft:birch_log'

		}
	)
	event.shaped(
		Item.of('vs_eureka:dark_oak_ship_helm'),
		[
			'EAS',
			'CWC',
			'SLE'
		],
		{
			E:'#forge:plates/electrum',
			A:'create:andesite_casing',
			S:'#forge:plates/aluminum',
			C:'create:large_cogwheel',
			W:'vs_clockwork:wanderlite_matrix',
			L:'minecraft:dark_oak_log'

		}
	)
	event.shaped(
		Item.of('vs_eureka:acacia_ship_helm'),
		[
			'EAS',
			'CWC',
			'SLE'
		],
		{
			E:'#forge:plates/electrum',
			A:'create:andesite_casing',
			S:'#forge:plates/aluminum',
			C:'create:large_cogwheel',
			W:'vs_clockwork:wanderlite_matrix',
			L:'minecraft:acacia_log'

		}
	)
	event.shaped(
		Item.of('vs_eureka:crimson_ship_helm'),
		[
			'EAS',
			'CWC',
			'SLE'
		],
		{
			E:'#forge:plates/electrum',
			A:'create:andesite_casing',
			S:'#forge:plates/aluminum',
			C:'create:large_cogwheel',
			W:'vs_clockwork:wanderlite_matrix',
			L:'minecraft:crimson_stem'

		}
	)
	event.shaped(
		Item.of('vs_eureka:warped_ship_helm'),
		[
			'EAS',
			'CWC',
			'SLE'
		],
		{
			E:'#forge:plates/electrum',
			A:'create:andesite_casing',
			S:'#forge:plates/aluminum',
			C:'create:large_cogwheel',
			W:'vs_clockwork:wanderlite_matrix',
			L:'minecraft:warped_stem'

		}
	)
	event.shaped(
		Item.of('vs_eureka:jungle_ship_helm'),
		[
			'EAS',
			'CWC',
			'SLE'
		],
		{
			E:'#forge:plates/electrum',
			A:'create:andesite_casing',
			S:'#forge:plates/aluminum',
			C:'create:large_cogwheel',
			W:'vs_clockwork:wanderlite_matrix',
			L:'minecraft:jungle_log'

		}
	)
	//floaters and ballast
	event.shapeless('vs_eureka:ballast',
	[
		'create:fluid_tank',
		'minecraft:redstone'
	])
	event.shapeless('vs_eureka:floater',
	[
		'#minecraft:planks',
		'2x minecraft:string'
	])
	//balloons
	event.shaped(
		Item.of('24x vs_eureka:balloon'),
		[
			' L ',
			'L L',
			' L '
		],
		{
			L:'#forge:leather'
		}
	)
	event.shapeless('8x vs_eureka:white_balloon',[
		'minecraft:white_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:light_gray_balloon',[
		'minecraft:light_gray_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:gray_balloon',[
		'minecraft:gray_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:black_balloon',[
		'minecraft:black_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:red_balloon',[
		'minecraft:red_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:orange_balloon',[
		'minecraft:orange_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:yellow_balloon',[
		'minecraft:yellow_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:lime_balloon',[
		'minecraft:lime_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:green_balloon',[
		'minecraft:green_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:light_blue_balloon',[
		'minecraft:light_blue_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:cyan_balloon',[
		'minecraft:cyan_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:blue_balloon',[
		'minecraft:blue_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:purple_balloon',[
		'minecraft:purple_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:magenta_balloon',[
		'minecraft:magenta_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:pink_balloon',[
		'minecraft:pink_dye',
		'8x vs_eureka:balloon'
	])
	event.shapeless('8x vs_eureka:brown_balloon',[
		'minecraft:brown_dye',
		'8x vs_eureka:balloon'
	])
	//remove alloy kiln
	event.remove({output:'immersiveengineering:alloybrick'})
	//add heart of the sea recipe
	event.shapeless('minecraft:heart_of_the_sea',
	[
		'minecraft:water_bucket',
		'8x minecraft:snow_block'
	])
	//add wanderlite recipe
	event.shaped(
		Item.of('vs_clockwork:wanderlite_crystal'),
		[
			'ALA',
			'LDL',
			'ALA'
		],
		{
			A:'minecraft:amethyst_shard',
			L:'minecraft:lapis_lazuli',
			D:'minecraft:diamond'
		}
	)
	//remove all other steel recipes
	event.remove({type:'create:mixing',output:'#forge:ingots/steel'})
	//AGE 4 ADDS---------------------------------
	//add trackwork recipes
	//add hard armor recipes
	//add letters recipe

})
