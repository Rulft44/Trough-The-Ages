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
	//make bandages and plasters cheaper to craft
	event.shaped(
		Item.of('2x firstaid:bandage'),
		[
			'S S',
			'WBW',
			'S S'
		],
		{
			S:'minecraft:string',
			W:'#minecraft:wool',
			B:'minecraft:slime_ball'
		}
	)
	event.shaped(
		Item.of('2x firstaid:plaster'),
		[
			'SS',
			'BW'
		],
		{
			S:'minecraft:string',
			W:'#minecraft:wool',
			B:'minecraft:slime_ball'
		}
	)
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
	//make morphine easier to craft
	event.recipes.create.mixing('firstaid:morphine',['minecraft:glass_bottle',Fluid.of('immersiveengineering:redstone_acid',100),'minecraft:sugar']).heated()
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
		'6x minecraft:snow_block',
		'2x minecraft:diamond'
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
	//make blaze burner lava recipe
	event.recipes.create.mixing(Fluid.lava(50),['#bookshelf:stones']).heated()
	//remove blaze cakes
	event.remove({output:'create:blaze_cake'})
	//remove all other steel recipes
	event.remove({type:'create:mixing',output:'#forge:ingots/steel'})
	//AGE 4 ADDS---------------------------------
	//make fur and hoglin hide craftable
	event.recipes.create.mixing('cold_sweat:fur',['#minecraft:wool','2x minecraft:string']).heated()
	event.recipes.create.mixing('cold_sweat:hoglin_hide',['2x minecraft:leather','2x minecraft:porkchop','1x minecraft:iron_ingot']).heated()
	//change distillation controller recipe
	event.remove({output:'createdieselgenerators:distillation_controller'})
	event.shaped(
		Item.of('createdieselgenerators:distillation_controller'),
		[
			'SIS',
			'RCR',
			'SIS'
		],
		{
			S:'#forge:plates/steel',
			I:'#forge:rods/iron',
			R:'minecraft:redstone',
			C:'minecraft:clock'
		}
	)
	//add new gunpowder recipe
	event.shapeless('6x minecraft:gunpowder',
		[
			'minecraft:charcoal',
			'vintageimprovements:sulfur',
			'4x minecraft:sugar'
		]
	)
	//fix autocannon cartriges being expensive and balance AP, APHE and HE
	//autocannon cartrige filling
	event.remove({output:'createbigcannons:filled_autocannon_cartridge'})
	event.recipes.create.deploying('createbigcannons:filled_autocannon_cartridge',['createbigcannons:empty_autocannon_cartridge','minecraft:gunpowder'])
	//AP
	event.remove({id:'createbigcannons:ap_shot'})
	event.recipes.create.mechanical_crafting('createbigcannons:ap_shot', [
		' S ',
		'CVC',
		'PPP'
	  ], {
		V:'vintageimprovements:vanadium_ingot',
		S:'s_a_b:hardsteelblock',
		C:'createbigcannons:cast_iron_block',
		P:'#forge:plates/steel'
	  })
	//APHE
	event.remove({output:'createbigcannons:ap_shell'})
	event.recipes.create.mechanical_crafting('createbigcannons:ap_shell', [
		' S ',
		'CVC',
		'PTP',
		'PPP'
	  ], {
		V:'vintageimprovements:vanadium_ingot',
		S:'s_a_b:hardsteelblock',
		C:'createbigcannons:cast_iron_block',
		P:'#forge:plates/steel',
		T:'minecraft:tnt'
	  })
	//HE
	event.remove({output:'createbigcannons:he_shell'})
	event.recipes.create.mechanical_crafting('createbigcannons:he_shell', [
		' I ',
		'PTP',
		'PTP',
		'SSS'
	  ], {
		I:'minecraft:iron_ingot',
		S:'#forge:plates/steel',
		T:'minecraft:tnt',
		P:'pneumaticcraft:plastic'
	  })
	//autocannon AP rounds
	event.remove({output:'createbigcannons:ap_autocannon_round'})
	event.shaped(
		Item.of('createbigcannons:ap_autocannon_round'),
		[
			'S',
			'V',
			'P'
		],
		{
			S:'#forge:ingots/steel',
			V:'#forge:rods/vanadium',
			P:'pneumaticcraft:plastic'
		}
	)
	//remove bioethanol 'cause it superheats and we no want that
	event.remove({input:'createaddition:biomass'})
	//remove ye pneumaticcraft oil recipes and all other pneumaticcraft stuff that doesnt fit
	event.remove({mod:'pneumaticcraft'})
	//add trackwork recipes
	//sprockets
	event.shaped(
		Item.of('trackwork:phys_track'),
		[
			'OIO',
			'ICI',
			'OIO'
		],
		{
			O:'#minecraft:planks',
			I:'#createbigcannons:sheet_iron',
			C:'create:cogwheel'
		}
	)
	event.shaped(
		Item.of('trackwork:med_phys_track'),
		[
			'CIC',
			'ITI',
			'CIC'
		],
		{
			C:'#forge:plates/cast_iron',
			I:'create:industrial_iron_block',
			T:'trackwork:phys_track'
		}
	)
	event.shaped(
		Item.of('trackwork:large_phys_track'),
		[
			'SIS',
			'ITI',
			'SIS'
		],
		{
			S:'#forge:plates/steel',
			I:'create_dd:industrial_iron_sheet',
			T:'trackwork:med_phys_track'
		}
	)
	//suspensions
	event.shaped(
		Item.of('trackwork:suspension_track'),
		[
			'KIK',
			'ILI',
			'KIK'
		],
		{
			K:'minecraft:dried_kelp',
			I:'#createbigcannons:sheet_iron',
			L:'#minecraft:logs'
		}
	)
	event.shaped(
		Item.of('trackwork:med_suspension_track'),
		[
			'DCD',
			'CSC',
			'DCD'
		],
		{
			D:'minecraft:dried_kelp',
			C:'#forge:plates/cast_iron',
			S:'trackwork:suspension_track'
		}
	)
	event.shaped(
		Item.of('trackwork:large_suspension_track'),
		[
			'IRI',
			'SMS',
			'IRI'
		],
		{
			I:'create:industrial_iron_block',
			R:'create_dd:rubber',
			S:'#forge:plates/steel',
			M:'trackwork:med_suspension_track'
		}
	)
	//trackwork tool stuff
	event.shaped(
		Item.of('trackwork:track_tool_kit'),
		[
			'STI',
			'WBE',
			'III'
		],
		{
			S:'trackwork:suspension_track',
			T:'trackwork:phys_track',
			I:'#createbigcannons:sheet_iron',
			W:'create:wrench',
			B:'create:brown_toolbox',
			E:'immersiveengineering:screwdriver'
		}
	)
	event.recipes.create.deploying('trackwork:track_level_controller',['create:encased_chain_drive','trackwork:suspension_track'])
	//add armor recipes
	//basic armor blocks
	event.stonecutting('s_a_b:lightsteelblock','#forge:plates/steel')
	event.recipes.create.compacting('s_a_b:steelblock',['alloyed:steel_sheet_metal']).heated()
	event.recipes.create.compacting('s_a_b:hardsteelblock',['2x s_a_b:steelblock','vintageimprovements:vanadium_nugget',Fluid.of('vintageimprovements:sulfur_dioxide',50)]).heated()
	//light camo used armor blocks
	event.shapeless('s_a_b:greenlightsteelblock',['s_a_b:lightsteelblock','minecraft:green_dye'])
	event.shapeless('s_a_b:brownlightsteelblock',['s_a_b:lightsteelblock','minecraft:brown_dye'])
	event.shapeless('s_a_b:lightgraylightsteelblock',['s_a_b:lightsteelblock','minecraft:gray_dye'])
	event.shapeless('s_a_b:graylightsteelblock',['s_a_b:lightsteelblock','minecraft:black_dye'])
	event.shapeless('s_a_b:lightsteelblockgelb',['s_a_b:lightsteelblock','minecraft:yellow_dye'])
	event.shapeless('2x s_a_b:lightsteelblockrotbraun',['2x s_a_b:lightsteelblock','minecraft:red_dye','minecraft:brown_dye'])
	event.shapeless('s_a_b:lightsteelcamodesert',['s_a_b:lightsteelblock','minecraft:sand'])
	event.shapeless('s_a_b:lightsteelcamomesa',['s_a_b:lightsteelblock','minecraft:red_sand'])
	event.shapeless('s_a_b:lightsteelcamoswamp',['s_a_b:lightsteelblock','minecraft:dirt'])
	event.shapeless('s_a_b:lightsteelblockcamoplains',['s_a_b:lightsteelblock','minecraft:lime_dye'])
	event.shapeless('s_a_b:lightsteelcamoforest',['s_a_b:lightsteelblock','minecraft:oak_leaves'])
	event.shapeless('s_a_b:lightsteelcamotaiga',['s_a_b:lightsteelblock','minecraft:spruce_leaves'])
	event.shapeless('s_a_b:lightsteelcamojungle',['s_a_b:lightsteelblock','minecraft:jungle_leaves'])
	event.shapeless('s_a_b:lightsteelcamosnow',['s_a_b:lightsteelblock','minecraft:snow_block'])
	event.shapeless('s_a_b:lightsteelblockpanzergrau',['s_a_b:lightsteelblock','minecraft:light_blue_dye'])
	event.shapeless('s_a_b:lightsteelblockcoloredparade',['s_a_b:lightsteelblock','minecraft:moss_block'])
	event.shapeless('s_a_b:whitelightsteelblock',['s_a_b:lightsteelblock','minecraft:white_dye'])
	//normal steel armor camo used armor blocks
	event.shapeless('s_a_b:greensteelblock',['s_a_b:steelblock','minecraft:green_dye'])
	event.shapeless('s_a_b:brownsteelblock',['s_a_b:steelblock','minecraft:brown_dye'])
	event.shapeless('s_a_b:lightgraysteelblock',['s_a_b:steelblock','minecraft:gray_dye'])
	event.shapeless('s_a_b:graysteelblock',['s_a_b:steelblock','minecraft:black_dye'])
	event.shapeless('s_a_b:steelblockgelb',['s_a_b:steelblock','minecraft:yellow_dye'])
	event.shapeless('2x s_a_b:steelblockrotbraun',['2x s_a_b:steelblock','minecraft:red_dye','minecraft:brown_dye'])
	event.shapeless('s_a_b:steelblockcamodesert',['s_a_b:steelblock','minecraft:sand'])
	event.shapeless('s_a_b:steelblockcamomesa',['s_a_b:steelblock','minecraft:red_sand'])
	event.shapeless('s_a_b:steelblockcamoswamp',['s_a_b:steelblock','minecraft:dirt'])
	event.shapeless('s_a_b:steelblockcamoplains',['s_a_b:steelblock','minecraft:lime_dye'])
	event.shapeless('s_a_b:steelblockcamoforest',['s_a_b:steelblock','minecraft:oak_leaves'])
	event.shapeless('s_a_b:steelblockcamotaiga',['s_a_b:steelblock','minecraft:spruce_leaves'])
	event.shapeless('s_a_b:steelblockcamojungle',['s_a_b:steelblock','minecraft:jungle_leaves'])
	event.shapeless('s_a_b:steelblockcamosnow',['s_a_b:steelblock','minecraft:snow_block'])
	event.shapeless('s_a_b:steelblockpanzergrau',['s_a_b:steelblock','minecraft:light_blue_dye'])
	event.shapeless('s_a_b:steelblockcoloredparade',['s_a_b:steelblock','minecraft:moss_block'])
	event.shapeless('s_a_b:whitesteelblock',['s_a_b:steelblock','minecraft:white_dye'])
	//hard armor camo used armor block
	event.shapeless('s_a_b:greenhardsteelblock',['s_a_b:hardsteelblock','minecraft:green_dye'])
	event.shapeless('s_a_b:brownhardsteelblock',['s_a_b:hardsteelblock','minecraft:brown_dye'])
	event.shapeless('s_a_b:lightgrayhardsteelblock',['s_a_b:hardsteelblock','minecraft:gray_dye'])
	event.shapeless('s_a_b:grayhardsteelblock',['s_a_b:hardsteelblock','minecraft:black_dye'])
	event.shapeless('s_a_b:hardsteelblockgelb',['s_a_b:hardsteelblock','minecraft:yellow_dye'])
	event.shapeless('2x s_a_b:hardsteelblockrotbraun',['2x s_a_b:hardsteelblock','minecraft:red_dye','minecraft:brown_dye'])
	event.shapeless('s_a_b:hardsteelblockcamodesert',['s_a_b:hardsteelblock','minecraft:sand'])
	event.shapeless('s_a_b:hardsteelblockcamomesa',['s_a_b:hardsteelblock','minecraft:red_sand'])
	event.shapeless('s_a_b:hardsteelblockcamoswamp',['s_a_b:hardsteelblock','minecraft:dirt'])
	event.shapeless('s_a_b:hardsteelblockcamoplains',['s_a_b:hardsteelblock','minecraft:lime_dye'])
	event.shapeless('s_a_b:hardsteelblockcamoforest',['s_a_b:hardsteelblock','minecraft:oak_leaves'])
	event.shapeless('s_a_b:hardsteelblockcamotaiga',['s_a_b:hardsteelblock','minecraft:spruce_leaves'])
	event.shapeless('s_a_b:hardsteelblockcamojungle',['s_a_b:hardsteelblock','minecraft:jungle_leaves'])
	event.shapeless('s_a_b:hardsteelblockcamosnow',['s_a_b:hardsteelblock','minecraft:snow_block'])
	event.shapeless('s_a_b:hardsteelblockpanzergrau',['s_a_b:hardsteelblock','minecraft:light_blue_dye'])
	event.shapeless('s_a_b:hardsteelblockcoloredparade',['s_a_b:hardsteelblock','minecraft:moss_block'])
	event.shapeless('s_a_b:whitehardsteelblock',['s_a_b:hardsteelblock','minecraft:white_dye'])
	//add letters recipe
	event.stonecutting('s_a_b:a','minecraft:gravel')
	event.stonecutting('s_a_b:b','minecraft:gravel')
	event.stonecutting('s_a_b:c','minecraft:gravel')
	event.stonecutting('s_a_b:d','minecraft:gravel')
	event.stonecutting('s_a_b:e','minecraft:gravel')
	event.stonecutting('s_a_b:f','minecraft:gravel')
	event.stonecutting('s_a_b:g','minecraft:gravel')
	event.stonecutting('s_a_b:h','minecraft:gravel')
	event.stonecutting('s_a_b:i','minecraft:gravel')
	event.stonecutting('s_a_b:j','minecraft:gravel')
	event.stonecutting('s_a_b:k','minecraft:gravel')
	event.stonecutting('s_a_b:l','minecraft:gravel')
	event.stonecutting('s_a_b:m','minecraft:gravel')
	event.stonecutting('s_a_b:n','minecraft:gravel')
	event.stonecutting('s_a_b:o','minecraft:gravel')
	event.stonecutting('s_a_b:p','minecraft:gravel')
	event.stonecutting('s_a_b:q','minecraft:gravel')
	event.stonecutting('s_a_b:r','minecraft:gravel')
	event.stonecutting('s_a_b:s','minecraft:gravel')
	event.stonecutting('s_a_b:t','minecraft:gravel')
	event.stonecutting('s_a_b:u','minecraft:gravel')
	event.stonecutting('s_a_b:v','minecraft:gravel')
	event.stonecutting('s_a_b:w','minecraft:gravel')
	event.stonecutting('s_a_b:x','minecraft:gravel')
	event.stonecutting('s_a_b:y','minecraft:gravel')
	event.stonecutting('s_a_b:z','minecraft:gravel')
	event.stonecutting('s_a_b:one','minecraft:gravel')
	event.stonecutting('s_a_b:two','minecraft:gravel')
	event.stonecutting('s_a_b:three','minecraft:gravel')
	event.stonecutting('s_a_b:four','minecraft:gravel')
	event.stonecutting('s_a_b:five','minecraft:gravel')
	event.stonecutting('s_a_b:six','minecraft:gravel')
	event.stonecutting('s_a_b:seven','minecraft:gravel')
	event.stonecutting('s_a_b:eight','minecraft:gravel')
	event.stonecutting('s_a_b:nine','minecraft:gravel')
	event.stonecutting('s_a_b:zero','minecraft:gravel')
	event.stonecutting('s_a_b:plus','minecraft:gravel')
	event.stonecutting('s_a_b:minus','minecraft:gravel')
	event.stonecutting('s_a_b:equality','minecraft:gravel')
	event.stonecutting('s_a_b:dot','minecraft:gravel')
	event.stonecutting('s_a_b:comma','minecraft:gravel')
	event.stonecutting('s_a_b:doubledot','minecraft:gravel')
	event.stonecutting('s_a_b:question','minecraft:gravel')
	event.stonecutting('s_a_b:exclamation','minecraft:gravel')
	//AGE  5 ADDS-------------------------------------
	//molten plastic recipe
	event.recipes.create.mixing([Fluid.of('pneumaticcraft:lpg',500)],[Fluid.of('createdieselgenerators:gasoline',1000)]).superheated()
	event.recipes.create.mixing([Fluid.of('pneumaticcraft:plastic',250),'2x immersiveengineering:slag'],[Fluid.of('pneumaticcraft:lpg',500),'vintageimprovements:sulfur']).heated()
	//plastic sheet reicpe
	event.recipes.create.compacting('2x pneumaticcraft:plastic',[Fluid.of('pneumaticcraft:plastic',1000),'vintageimprovements:sulfur']).superheated()
	//change engine turbocharger and silencer recipe
	event.remove({output:'createdieselgenerators:engine_turbocharger'})
	event.shaped(
		Item.of('createdieselgenerators:engine_turbocharger'),
		[
			'PPP',
			'FRS',
			'PPP'
		],
		{
			P:'pneumaticcraft:plastic',
			F:'create:fluid_pipe',
			R:'pneumaticcraft:turbine_rotor',
			S:'create:shaft'
		}
	)
	event.remove({output:'createdieselgenerators:engine_silencer'})
	event.shaped(
		Item.of('createdieselgenerators:engine_silencer'),
		[
			'PFS',
			'FCF',
			' FP'
		],
		{
			P:'pneumaticcraft:plastic',
			F:'cold_sweat:fur',
			S:'#forge:plates/steel',
			C:'create:fluid_pipe'
		}
	)
	//add turbine rotor recipe
	event.shaped(
		Item.of('pneumaticcraft:turbine_rotor'),
		[
			' B ',
			'SPS',
			'B B'
		],
		{
			S:'minecraft:string',
			B:'pneumaticcraft:turbine_blade',
			P:'pneumaticcraft:plastic'
		}
	)
	event.recipes.create.deploying('pneumaticcraft:turbine_blade',['pneumaticcraft:plastic','minecraft:redstone_torch'])
	//change all diesel engines recipes
	event.remove({output:'createdieselgenerators:engine_piston'})
	event.shaped(
		Item.of('createdieselgenerators:engine_piston'),
		[
			'SS ',
			'SF ',
			'  I'
		],
		{
			S:'#createbigcannons:sheet_iron',
			F:'cold_sweat:fur',
			I:'#forge:rods/iron'
		}
	)
	event.remove({output:'createdieselgenerators:diesel_engine'})
	event.recipes.create.mechanical_crafting('createdieselgenerators:diesel_engine', [
		'SFS',
		'PBP',
		'PTP',
		'OOO'
	],
	{
		S:'pneumaticcraft:plastic',
		F:'minecraft:flint_and_steel',
		P:'createdieselgenerators:engine_piston',
		B:'create:brass_block',
		T:'createdieselgenerators:engine_turbocharger',
		O:'create:sturdy_sheet'
	})
	event.remove({output:'minecraft:flint_and_steel'})
	event.remove({output:'createdieselgenerators:huge_diesel_engine'})
	event.recipes.create.mechanical_crafting('createdieselgenerators:huge_diesel_engine', [
		' PSP ',
		' PEP ',
		'PFBFP',
		' OOO '
	],
	{
		P:'pneumaticcraft:plastic',
		S:'createdieselgenerators:engine_turbocharger',
		E:'create:steam_engine',
		B:'create:brass_block',
		F:'create:fluid_pipe',
		O:'create:brass_sheet'
	})
	//make logistics core recipe --> goes to age 6
	event.shaped(
		Item.of('pneumaticcraft:logistics_core'),
		[
			'VPV',
			'PLP',
			'VPV'
		],
		{
			V:'vintageimprovements:vanadium_sheet',
			P:'pneumaticcraft:plastic',
			L:'create_dd:inductive_mechanism'
		}
	)
	//change redstone engineering block recipe to require this stuff here
	event.remove({output:'immersiveengineering:rs_engineering'})
	event.shaped(
		Item.of('2x immersiveengineering:rs_engineering'),
		[
			'IMI',
			'RLR',
			'IRI'
		],
		{
			I:'#createbigcannons:sheet_iron',
			M:'vintageimprovements:redstone_module',
			R:'minecraft:redstone',
			L:'pneumaticcraft:logistics_core'
		}
	)
	//AGE 6 ADDS-------------------------------------------
	//make compressed iron compresseablaeu + compressed iron gear
	event.recipes.create.compacting('pneumaticcraft:ingot_iron_compressed',['minecraft:iron_ingot','minecraft:gunpowder']).superheated()
	event.shaped(
		Item.of('pneumaticcraft:compressed_iron_gear'),
		[
			' R ',
			'RRR',
			' R '
		],
		{
			R:'pneumaticcraft:ingot_iron_compressed'
		}
	)
	//make the heavy metal press produce redstone engineering blocks
	event.recipes.immersiveengineering.metal_press('2x immersiveengineering:rs_engineering','vintageimprovements:redstone_module','immersiveengineering:mold_gear',16000)
	//make coke oven accept charcoal but make it so its less efficient/fast
	event.recipes.immersiveengineering.coke_oven('immersiveengineering:coal_coke','minecraft:charcoal',100,120)
	//change all engineering blocks to REQUIRE plastic --> sequenced assembly cause why not
	event.remove({output:'immersiveengineering:light_engineering'})
	event.recipes.create.sequenced_assembly([
		Item.of('immersiveengineering:light_engineering').withChance(130.0)
	], 'create_dd:industrial_casing', [
		event.recipes.createDeploying('create_dd:industrial_casing', ['create_dd:industrial_casing', '#createbigcannons:sheet_iron']),
		event.recipes.createDeploying('create_dd:industrial_casing', ['create_dd:industrial_casing', 'immersiveengineering:component_iron']),
		event.recipes.createDeploying('create_dd:industrial_casing', ['create_dd:industrial_casing', 'supplementaries:cog_block']),
		event.recipes.createPressing('create_dd:industrial_casing','create_dd:industrial_casing'),
		event.recipes.createDeploying('create_dd:industrial_casing',['create_dd:industrial_casing','pneumaticcraft:plastic'])
	]).transitionalItem('create_dd:industrial_casing').loops(1)
	event.remove({output:'immersiveengineering:heavy_engineering'})
	event.recipes.create.sequenced_assembly([
		Item.of('immersiveengineering:heavy_engineering').withChance(130.0)
	], 'create_dd:steel_casing', [
		event.recipes.createDeploying('create_dd:steel_casing', ['create_dd:steel_casing', '#forge:plates/steel']),
		event.recipes.createDeploying('create_dd:steel_casing', ['create_dd:steel_casing', 'immersiveengineering:component_steel']),
		event.recipes.createFilling('create_dd:steel_casing',['create_dd:steel_casing',Fluid.of('createdieselgenerators:crude_oil',1000)]),
		event.recipes.createDeploying('create_dd:steel_casing', ['create_dd:steel_casing', 'pneumaticcraft:compressed_iron_gear']),
		event.recipes.createPressing('create_dd:steel_casing','create_dd:steel_casing'),
		event.recipes.createDeploying('create_dd:steel_casing',['create_dd:steel_casing','pneumaticcraft:plastic'])
	]).transitionalItem('create_dd:steel_casing').loops(1)
	event.remove({output:'immersiveengineering:radiator'}),
	event.shaped(
		Item.of('immersiveengineering:radiator'),
		[
			'CIC',
			'IRI',
			'CIC'
		],
		{
			C:'create_dd:industrial_casing',
			I:'#forge:plates/lead',
			R:'pneumaticcraft:turbine_rotor'
		}
	)
	//make cannon steel recipe with HOP graphite luh guh duh and make HOP graphite dust cheaper while making the electrodes harder to obtain
	event.remove({output:'immersiveengineering:dust_hop_graphite'})
	event.remove({output:'immersiveengineering:graphite_electrode'})
	event.recipes.immersiveengineering.squeezer('immersiveengineering:dust_hop_graphite','4x immersiveengineering:dust_coke',10000)
	event.shaped(
		Item.of('immersiveengineering:graphite_electrode'),
		[
			'GCG',
			'GCG',
			'GCG'
		],
		{
			G:'immersiveengineering:ingot_hop_graphite',
			C:'vintageimprovements:copper_sulfate'
		}
	)
	//cannon steel
	event.remove({id:'createbigcannons:melting/melt_steel_block'})
	event.remove({id:'createbigcannons:melting/melt_steel_ingot'})
	event.remove({id:'createbigcannons:melting/melt_steel_nugget'})
	event.recipes.create.mixing('8x alloyed:steel_ingot',['immersiveengineering:ingot_hop_graphite','8x #forge:ingots/steel']).heated()
	event.recipes.create.mixing(Fluid.of('createbigcannons:molten_steel',90),['alloyed:steel_ingot']).superheated()
})