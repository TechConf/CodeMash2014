#include <stdio.h>
#include <stdlib.h>

typedef enum {
	pitcher     = 1,
	catcher     = 2,
	firstBase   = 3,
	secondBase  = 4,
	shortstop   = 5,
	thirdBase   = 6,
	leftField   = 7,
	centerField = 8,
	rightField  = 9
} Position;

typedef struct {
	char *name;
	int number;
	Position position;
} BaseballPlayer;

void PrintBaseballCard(BaseballPlayer *player)
{
	printf("name: %s\n", player->name);
	printf("number: %d\n", player->number);
	printf("position: %d\n", player->position);
}

int main(int ac, char *av[])
{
	BaseballPlayer *miggy = malloc(sizeof(BaseballPlayer));

	miggy->name = "Miguel Cabrera";
	miggy->number = 24;
	miggy->position = thirdBase;
	
	PrintBaseballCard(miggy);
	
	free(miggy);

	return 0;
}
