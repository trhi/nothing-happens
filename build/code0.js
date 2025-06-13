gdjs.Game_32SceneCode = {};
gdjs.Game_32SceneCode.localVariables = [];
gdjs.Game_32SceneCode.GDMessage_9595boxObjects1= [];
gdjs.Game_32SceneCode.GDMessage_9595boxObjects2= [];
gdjs.Game_32SceneCode.GDMessage_9595boxObjects3= [];
gdjs.Game_32SceneCode.GDMessage_9595boxObjects4= [];
gdjs.Game_32SceneCode.GDWallObjects1= [];
gdjs.Game_32SceneCode.GDWallObjects2= [];
gdjs.Game_32SceneCode.GDWallObjects3= [];
gdjs.Game_32SceneCode.GDWallObjects4= [];
gdjs.Game_32SceneCode.GDPlantObjects1= [];
gdjs.Game_32SceneCode.GDPlantObjects2= [];
gdjs.Game_32SceneCode.GDPlantObjects3= [];
gdjs.Game_32SceneCode.GDPlantObjects4= [];
gdjs.Game_32SceneCode.GDJoystickObjects1= [];
gdjs.Game_32SceneCode.GDJoystickObjects2= [];
gdjs.Game_32SceneCode.GDJoystickObjects3= [];
gdjs.Game_32SceneCode.GDJoystickObjects4= [];
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1= [];
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2= [];
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects3= [];
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects4= [];
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1= [];
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2= [];
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects3= [];
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects4= [];
gdjs.Game_32SceneCode.GDTVObjects1= [];
gdjs.Game_32SceneCode.GDTVObjects2= [];
gdjs.Game_32SceneCode.GDTVObjects3= [];
gdjs.Game_32SceneCode.GDTVObjects4= [];
gdjs.Game_32SceneCode.GDUI_9595messageObjects1= [];
gdjs.Game_32SceneCode.GDUI_9595messageObjects2= [];
gdjs.Game_32SceneCode.GDUI_9595messageObjects3= [];
gdjs.Game_32SceneCode.GDUI_9595messageObjects4= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects2= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects3= [];
gdjs.Game_32SceneCode.GDNewSpriteObjects4= [];
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects1= [];
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects2= [];
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects3= [];
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects4= [];
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects1= [];
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects2= [];
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects3= [];
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects4= [];
gdjs.Game_32SceneCode.GDPC3Objects1= [];
gdjs.Game_32SceneCode.GDPC3Objects2= [];
gdjs.Game_32SceneCode.GDPC3Objects3= [];
gdjs.Game_32SceneCode.GDPC3Objects4= [];
gdjs.Game_32SceneCode.GDBlueprintObjects1= [];
gdjs.Game_32SceneCode.GDBlueprintObjects2= [];
gdjs.Game_32SceneCode.GDBlueprintObjects3= [];
gdjs.Game_32SceneCode.GDBlueprintObjects4= [];
gdjs.Game_32SceneCode.GDTileSetObjects1= [];
gdjs.Game_32SceneCode.GDTileSetObjects2= [];
gdjs.Game_32SceneCode.GDTileSetObjects3= [];
gdjs.Game_32SceneCode.GDTileSetObjects4= [];
gdjs.Game_32SceneCode.GDbackground_9595squareObjects1= [];
gdjs.Game_32SceneCode.GDbackground_9595squareObjects2= [];
gdjs.Game_32SceneCode.GDbackground_9595squareObjects3= [];
gdjs.Game_32SceneCode.GDbackground_9595squareObjects4= [];
gdjs.Game_32SceneCode.GDLightObjects1= [];
gdjs.Game_32SceneCode.GDLightObjects2= [];
gdjs.Game_32SceneCode.GDLightObjects3= [];
gdjs.Game_32SceneCode.GDLightObjects4= [];
gdjs.Game_32SceneCode.GDTimer_9595textObjects1= [];
gdjs.Game_32SceneCode.GDTimer_9595textObjects2= [];
gdjs.Game_32SceneCode.GDTimer_9595textObjects3= [];
gdjs.Game_32SceneCode.GDTimer_9595textObjects4= [];
gdjs.Game_32SceneCode.GDFilterObjects1= [];
gdjs.Game_32SceneCode.GDFilterObjects2= [];
gdjs.Game_32SceneCode.GDFilterObjects3= [];
gdjs.Game_32SceneCode.GDFilterObjects4= [];
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1= [];
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2= [];
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects3= [];
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects4= [];


gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDTVObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPC3Objects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDTileSetObjects1Objects = Hashtable.newFrom({"Plant": gdjs.Game_32SceneCode.GDPlantObjects1, "Wall": gdjs.Game_32SceneCode.GDWallObjects1, "TV": gdjs.Game_32SceneCode.GDTVObjects1, "PC3": gdjs.Game_32SceneCode.GDPC3Objects1, "TileSet": gdjs.Game_32SceneCode.GDTileSetObjects1});
gdjs.Game_32SceneCode.eventsList0 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber() <= runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDLightObjects1, gdjs.Game_32SceneCode.GDLightObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDLightObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLightObjects2[i].setRadius(runtimeScene.getGame().getVariables().getFromIndex(12).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber() >= runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber());
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDFilterObjects1, gdjs.Game_32SceneCode.GDFilterObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDFilterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFilterObjects2[i].getBehavior("Opacity").setOpacity(runtimeScene.getGame().getVariables().getFromIndex(11).getAsNumber());
}
}}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.Game_32SceneCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Blueprint"), gdjs.Game_32SceneCode.GDBlueprintObjects2);
gdjs.copyArray(runtimeScene.getObjects("Filter"), gdjs.Game_32SceneCode.GDFilterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.Game_32SceneCode.GDLightObjects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue_background"), gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue_txt"), gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2);
{gdjs.evtTools.camera.setCameraZoom(runtimeScene, 2, "", 0);
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2[i].setZOrder((( gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[0].getZOrder()) - 1);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2[i].getWidth()) / 2 - 10);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[i].setX(gdjs.evtTools.window.getGameResolutionWidth(runtimeScene) / 2 - (gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[i].getWidth()) / 2);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2[i].getBehavior("Resizable").setWidth((( gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[0].getWidth()) + 10);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2[i].getBehavior("Resizable").setHeight((( gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length === 0 ) ? 0 :gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[0].getHeight()) + 40);
}
}{gdjs.dialogueTree.loadFromJsonFile(runtimeScene, "Dialogue");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDBlueprintObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDBlueprintObjects2[i].hide();
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "mainTimer");
}{gdjs.evtTools.runtimeScene.setBackgroundColor(runtimeScene, "0;122;255");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLightObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLightObjects2[i].setColor("255;255;255");
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFilterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFilterObjects2[i].getBehavior("Resizable").setWidth(1280);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFilterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFilterObjects2[i].getBehavior("Resizable").setHeight(720);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFilterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFilterObjects2[i].setPosition(0,0);
}
}{runtimeScene.getGame().getVariables().getFromIndex(9).setNumber(10);
}{runtimeScene.getGame().getVariables().getFromIndex(10).setNumber(1);
}{runtimeScene.getGame().getVariables().getFromIndex(12).setNumber(100);
}{runtimeScene.getGame().getVariables().getFromIndex(11).setNumber(150);
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Filter"), gdjs.Game_32SceneCode.GDFilterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Light"), gdjs.Game_32SceneCode.GDLightObjects1);
gdjs.copyArray(runtimeScene.getObjects("PC3"), gdjs.Game_32SceneCode.GDPC3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Game_32SceneCode.GDPlantObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playable_Character"), gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("TV"), gdjs.Game_32SceneCode.GDTVObjects1);
gdjs.copyArray(runtimeScene.getObjects("TileSet"), gdjs.Game_32SceneCode.GDTileSetObjects1);
gdjs.copyArray(runtimeScene.getObjects("Timer_text"), gdjs.Game_32SceneCode.GDTimer_9595textObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32SceneCode.GDWallObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1[i].separateFromObjectsList(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDTVObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPC3Objects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDTileSetObjects1Objects, false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLightObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLightObjects1[i].setPosition(gdjs.evtTools.camera.getCameraX(runtimeScene, "", 0),gdjs.evtTools.camera.getCameraY(runtimeScene, "", 0));
}
}{runtimeScene.getGame().getVariables().getFromIndex(3).setNumber(Math.round(gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSeconds(runtimeScene, "mainTimer")));
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDTimer_9595textObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDTimer_9595textObjects1[i].getBehavior("Text").setText(gdjs.evtTools.common.toString(runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber()));
}
}{runtimeScene.getGame().getVariables().getFromIndex(6).setNumber(runtimeScene.getGame().getVariables().getFromIndex(5).getAsNumber() - runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(9).getAsNumber());
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDLightObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDLightObjects1[i].setRadius(runtimeScene.getGame().getVariables().getFromIndex(6).getAsNumber());
}
}{runtimeScene.getGame().getVariables().getFromIndex(8).setNumber(runtimeScene.getGame().getVariables().getFromIndex(7).getAsNumber() + runtimeScene.getGame().getVariables().getFromIndex(3).getAsNumber() * runtimeScene.getGame().getVariables().getFromIndex(10).getAsNumber());
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDFilterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDFilterObjects1[i].getBehavior("Opacity").setOpacity(runtimeScene.getGame().getVariables().getFromIndex(8).getAsNumber());
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList0(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList2 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Left");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Left", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1, gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2);

{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2[i].getBehavior("Flippable").flipX(true);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{let isConditionTrue_1 = false;
isConditionTrue_0 = false;
{
isConditionTrue_1 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Right");
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
isConditionTrue_1 = gdjs.evtsExt__SpriteMultitouchJoystick__IsDirectionPushed4Way.func(runtimeScene, 1, "Primary", "Right", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
if(isConditionTrue_1) {
    isConditionTrue_0 = true;
}
}
{
}
}
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1[i].getBehavior("Flippable").flipX(false);
}
}}

}


};gdjs.Game_32SceneCode.eventsList3 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Playable_Character"), gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2.length;i<l;++i) {
    if ( !(gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2[i].getBehavior("TopDownMovement").isMoving()) ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2[k] = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2[i].getBehavior("Animation").setAnimationName("idle");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("Playable_Character"), gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1.length;i<l;++i) {
    if ( gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1[i].getBehavior("TopDownMovement").isMoving() ) {
        isConditionTrue_0 = true;
        gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1[k] = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1[i];
        ++k;
    }
}
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1[i].getBehavior("Animation").setAnimationName("walk");
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList2(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects = Hashtable.newFrom({"Playable_Character": gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTVObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPC3Objects2Objects = Hashtable.newFrom({"TV": gdjs.Game_32SceneCode.GDTVObjects2, "PC3": gdjs.Game_32SceneCode.GDPC3Objects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects3Objects = Hashtable.newFrom({"Playable_Character": gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTVObjects3Objects = Hashtable.newFrom({"TV": gdjs.Game_32SceneCode.GDTVObjects3});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects = Hashtable.newFrom({"Playable_Character": gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPC3Objects2Objects = Hashtable.newFrom({"PC3": gdjs.Game_32SceneCode.GDPC3Objects2});
gdjs.Game_32SceneCode.eventsList4 = function(runtimeScene) {

{

gdjs.copyArray(gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2, gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects3);

gdjs.copyArray(gdjs.Game_32SceneCode.GDTVObjects2, gdjs.Game_32SceneCode.GDTVObjects3);


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects3Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTVObjects3Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("tv");
}}

}


{

/* Reuse gdjs.Game_32SceneCode.GDPC3Objects2 */
/* Reuse gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPC3Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("pc");
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects1Objects = Hashtable.newFrom({"Playable_Character": gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTVObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPC3Objects1Objects = Hashtable.newFrom({"TV": gdjs.Game_32SceneCode.GDTVObjects1, "PC3": gdjs.Game_32SceneCode.GDPC3Objects1});
gdjs.Game_32SceneCode.eventsList5 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("PC3"), gdjs.Game_32SceneCode.GDPC3Objects2);
gdjs.copyArray(runtimeScene.getObjects("Playable_Character"), gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("TV"), gdjs.Game_32SceneCode.GDTVObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTVObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPC3Objects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14021236);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue_background"), gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue_txt"), gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2);
{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[i].hide(false);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("PC3"), gdjs.Game_32SceneCode.GDPC3Objects1);
gdjs.copyArray(runtimeScene.getObjects("Playable_Character"), gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("TV"), gdjs.Game_32SceneCode.GDTVObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDTVObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDPC3Objects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14023804);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue_background"), gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogue_txt"), gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1[i].hide();
}
}{gdjs.dialogueTree.stopRunningDialogue();
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects = Hashtable.newFrom({"Playable_Character": gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Plant": gdjs.Game_32SceneCode.GDPlantObjects2, "Wall": gdjs.Game_32SceneCode.GDWallObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects = Hashtable.newFrom({"Playable_Character": gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDWallObjects2Objects = Hashtable.newFrom({"Plant": gdjs.Game_32SceneCode.GDPlantObjects2, "Wall": gdjs.Game_32SceneCode.GDWallObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects = Hashtable.newFrom({"Playable_Character": gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects2Objects = Hashtable.newFrom({"Plant": gdjs.Game_32SceneCode.GDPlantObjects2});
gdjs.Game_32SceneCode.eventsList6 = function(runtimeScene) {

{

/* Reuse gdjs.Game_32SceneCode.GDPlantObjects2 */
/* Reuse gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2 */

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
{gdjs.dialogueTree.startFrom("something");
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects1Objects = Hashtable.newFrom({"Playable_Character": gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1});
gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects = Hashtable.newFrom({"Plant": gdjs.Game_32SceneCode.GDPlantObjects1, "Wall": gdjs.Game_32SceneCode.GDWallObjects1});
gdjs.Game_32SceneCode.eventsList7 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Game_32SceneCode.GDPlantObjects2);
gdjs.copyArray(runtimeScene.getObjects("Playable_Character"), gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32SceneCode.GDWallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDWallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14025252);
}
}
if (isConditionTrue_0) {
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Game_32SceneCode.GDPlantObjects2);
gdjs.copyArray(runtimeScene.getObjects("Playable_Character"), gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32SceneCode.GDWallObjects2);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects2Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects2ObjectsGDgdjs_9546Game_959532SceneCode_9546GDWallObjects2Objects, false, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isRunning());
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue_background"), gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2);
gdjs.copyArray(runtimeScene.getObjects("dialogue_txt"), gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2[i].hide(false);
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[i].hide(false);
}
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList6(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Plant"), gdjs.Game_32SceneCode.GDPlantObjects1);
gdjs.copyArray(runtimeScene.getObjects("Playable_Character"), gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1);
gdjs.copyArray(runtimeScene.getObjects("Wall"), gdjs.Game_32SceneCode.GDWallObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.object.hitBoxesCollisionTest(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlayable_95959595CharacterObjects1Objects, gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDPlantObjects1ObjectsGDgdjs_9546Game_959532SceneCode_9546GDWallObjects1Objects, true, runtimeScene, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14028140);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue_background"), gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1);
gdjs.copyArray(runtimeScene.getObjects("dialogue_txt"), gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1[i].hide();
}
}{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1[i].hide();
}
}{gdjs.dialogueTree.stopRunningDialogue();
}}

}


};gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdialogue_95959595backgroundObjects3Objects = Hashtable.newFrom({"dialogue_background": gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects3});
gdjs.Game_32SceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.getTimerElapsedTimeInSecondsOrNaN(runtimeScene, "scrollText") >= gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().get("_txtScrollSpeed"));
if (isConditionTrue_0) {
{gdjs.dialogueTree.scrollClippedText();
}{gdjs.evtTools.runtimeScene.resetTimer(runtimeScene, "scrollText");
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.wasKeyReleased(runtimeScene, "Space");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("dialogue_background"), gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.Game_32SceneCode.mapOfGDgdjs_9546Game_959532SceneCode_9546GDdialogue_95959595backgroundObjects3Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isRunning();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasClippedScrollingCompleted();
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.goToNextDialogueLine();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(0.01);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space"));
if (isConditionTrue_0) {
{runtimeScene.getGame().getVariables().getFromIndex(0).setNumber(100);
}}

}


};gdjs.Game_32SceneCode.eventsList9 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Up");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14035700);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectPreviousOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Down");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(14036412);
}
}
if (isConditionTrue_0) {
{gdjs.dialogueTree.selectNextOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isKeyPressed(runtimeScene, "Space");
if (isConditionTrue_0) {
{gdjs.dialogueTree.confirmSelectOption();
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.hasSelectedOptionChanged();
if (isConditionTrue_0) {
/* Reuse gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1 */
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1[i].getBehavior("Text").setText(gdjs.dialogueTree.getLineOptionsTextVertical(">"));
}
}}

}


};gdjs.Game_32SceneCode.eventsList10 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.dialogueTree.isDialogueLineType("options"));
if (isConditionTrue_0) {
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("text");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue_txt"), gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2[i].getBehavior("Text").setText(gdjs.dialogueTree.getClippedLineText());
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList8(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.dialogueTree.isDialogueLineType("options");
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("dialogue_txt"), gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1);
{for(var i = 0, len = gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1.length ;i < len;++i) {
    gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1[i].hide(false);
}
}
{ //Subevents
gdjs.Game_32SceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


};gdjs.Game_32SceneCode.eventsList11 = function(runtimeScene) {

{


gdjs.Game_32SceneCode.eventsList1(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList3(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList5(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList7(runtimeScene);
}


{


gdjs.Game_32SceneCode.eventsList10(runtimeScene);
}


};

gdjs.Game_32SceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Game_32SceneCode.GDMessage_9595boxObjects1.length = 0;
gdjs.Game_32SceneCode.GDMessage_9595boxObjects2.length = 0;
gdjs.Game_32SceneCode.GDMessage_9595boxObjects3.length = 0;
gdjs.Game_32SceneCode.GDMessage_9595boxObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects3.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects4.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDTVObjects1.length = 0;
gdjs.Game_32SceneCode.GDTVObjects2.length = 0;
gdjs.Game_32SceneCode.GDTVObjects3.length = 0;
gdjs.Game_32SceneCode.GDTVObjects4.length = 0;
gdjs.Game_32SceneCode.GDUI_9595messageObjects1.length = 0;
gdjs.Game_32SceneCode.GDUI_9595messageObjects2.length = 0;
gdjs.Game_32SceneCode.GDUI_9595messageObjects3.length = 0;
gdjs.Game_32SceneCode.GDUI_9595messageObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDPC3Objects1.length = 0;
gdjs.Game_32SceneCode.GDPC3Objects2.length = 0;
gdjs.Game_32SceneCode.GDPC3Objects3.length = 0;
gdjs.Game_32SceneCode.GDPC3Objects4.length = 0;
gdjs.Game_32SceneCode.GDBlueprintObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlueprintObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlueprintObjects3.length = 0;
gdjs.Game_32SceneCode.GDBlueprintObjects4.length = 0;
gdjs.Game_32SceneCode.GDTileSetObjects1.length = 0;
gdjs.Game_32SceneCode.GDTileSetObjects2.length = 0;
gdjs.Game_32SceneCode.GDTileSetObjects3.length = 0;
gdjs.Game_32SceneCode.GDTileSetObjects4.length = 0;
gdjs.Game_32SceneCode.GDbackground_9595squareObjects1.length = 0;
gdjs.Game_32SceneCode.GDbackground_9595squareObjects2.length = 0;
gdjs.Game_32SceneCode.GDbackground_9595squareObjects3.length = 0;
gdjs.Game_32SceneCode.GDbackground_9595squareObjects4.length = 0;
gdjs.Game_32SceneCode.GDLightObjects1.length = 0;
gdjs.Game_32SceneCode.GDLightObjects2.length = 0;
gdjs.Game_32SceneCode.GDLightObjects3.length = 0;
gdjs.Game_32SceneCode.GDLightObjects4.length = 0;
gdjs.Game_32SceneCode.GDTimer_9595textObjects1.length = 0;
gdjs.Game_32SceneCode.GDTimer_9595textObjects2.length = 0;
gdjs.Game_32SceneCode.GDTimer_9595textObjects3.length = 0;
gdjs.Game_32SceneCode.GDTimer_9595textObjects4.length = 0;
gdjs.Game_32SceneCode.GDFilterObjects1.length = 0;
gdjs.Game_32SceneCode.GDFilterObjects2.length = 0;
gdjs.Game_32SceneCode.GDFilterObjects3.length = 0;
gdjs.Game_32SceneCode.GDFilterObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects4.length = 0;

gdjs.Game_32SceneCode.eventsList11(runtimeScene);
gdjs.Game_32SceneCode.GDMessage_9595boxObjects1.length = 0;
gdjs.Game_32SceneCode.GDMessage_9595boxObjects2.length = 0;
gdjs.Game_32SceneCode.GDMessage_9595boxObjects3.length = 0;
gdjs.Game_32SceneCode.GDMessage_9595boxObjects4.length = 0;
gdjs.Game_32SceneCode.GDWallObjects1.length = 0;
gdjs.Game_32SceneCode.GDWallObjects2.length = 0;
gdjs.Game_32SceneCode.GDWallObjects3.length = 0;
gdjs.Game_32SceneCode.GDWallObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlantObjects4.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects1.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects2.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects3.length = 0;
gdjs.Game_32SceneCode.GDJoystickObjects4.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects1.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects2.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects3.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595txtObjects4.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDdialogue_9595backgroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDTVObjects1.length = 0;
gdjs.Game_32SceneCode.GDTVObjects2.length = 0;
gdjs.Game_32SceneCode.GDTVObjects3.length = 0;
gdjs.Game_32SceneCode.GDTVObjects4.length = 0;
gdjs.Game_32SceneCode.GDUI_9595messageObjects1.length = 0;
gdjs.Game_32SceneCode.GDUI_9595messageObjects2.length = 0;
gdjs.Game_32SceneCode.GDUI_9595messageObjects3.length = 0;
gdjs.Game_32SceneCode.GDUI_9595messageObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewSpriteObjects4.length = 0;
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects1.length = 0;
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects2.length = 0;
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects3.length = 0;
gdjs.Game_32SceneCode.GDNewPanelSpriteObjects4.length = 0;
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects1.length = 0;
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects2.length = 0;
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects3.length = 0;
gdjs.Game_32SceneCode.GDUI_9595interaction_9595backgroundObjects4.length = 0;
gdjs.Game_32SceneCode.GDPC3Objects1.length = 0;
gdjs.Game_32SceneCode.GDPC3Objects2.length = 0;
gdjs.Game_32SceneCode.GDPC3Objects3.length = 0;
gdjs.Game_32SceneCode.GDPC3Objects4.length = 0;
gdjs.Game_32SceneCode.GDBlueprintObjects1.length = 0;
gdjs.Game_32SceneCode.GDBlueprintObjects2.length = 0;
gdjs.Game_32SceneCode.GDBlueprintObjects3.length = 0;
gdjs.Game_32SceneCode.GDBlueprintObjects4.length = 0;
gdjs.Game_32SceneCode.GDTileSetObjects1.length = 0;
gdjs.Game_32SceneCode.GDTileSetObjects2.length = 0;
gdjs.Game_32SceneCode.GDTileSetObjects3.length = 0;
gdjs.Game_32SceneCode.GDTileSetObjects4.length = 0;
gdjs.Game_32SceneCode.GDbackground_9595squareObjects1.length = 0;
gdjs.Game_32SceneCode.GDbackground_9595squareObjects2.length = 0;
gdjs.Game_32SceneCode.GDbackground_9595squareObjects3.length = 0;
gdjs.Game_32SceneCode.GDbackground_9595squareObjects4.length = 0;
gdjs.Game_32SceneCode.GDLightObjects1.length = 0;
gdjs.Game_32SceneCode.GDLightObjects2.length = 0;
gdjs.Game_32SceneCode.GDLightObjects3.length = 0;
gdjs.Game_32SceneCode.GDLightObjects4.length = 0;
gdjs.Game_32SceneCode.GDTimer_9595textObjects1.length = 0;
gdjs.Game_32SceneCode.GDTimer_9595textObjects2.length = 0;
gdjs.Game_32SceneCode.GDTimer_9595textObjects3.length = 0;
gdjs.Game_32SceneCode.GDTimer_9595textObjects4.length = 0;
gdjs.Game_32SceneCode.GDFilterObjects1.length = 0;
gdjs.Game_32SceneCode.GDFilterObjects2.length = 0;
gdjs.Game_32SceneCode.GDFilterObjects3.length = 0;
gdjs.Game_32SceneCode.GDFilterObjects4.length = 0;
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects1.length = 0;
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects2.length = 0;
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects3.length = 0;
gdjs.Game_32SceneCode.GDPlayable_9595CharacterObjects4.length = 0;


return;

}

gdjs['Game_32SceneCode'] = gdjs.Game_32SceneCode;
